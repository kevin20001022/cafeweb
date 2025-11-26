import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Client } from '@notionhq/client';

// 初始化 Notion 客户端
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID!;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // 只允许 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, role, notes } = req.body;

    // 验证必填字段
    if (!name || !email || !role) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // 验证 email 格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // 创建 Notion 页面
    await notion.pages.create({
      parent: {
        database_id: DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Role: {
          select: {
            name: role === 'WORKER' ? '遠端工作者' : '咖啡廳業者',
          },
        },
        備註: {
          rich_text: [
            {
              text: {
                content: notes || '',
              },
            },
          ],
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: 'Lead submitted successfully'
    });

  } catch (error: any) {
    console.error('Error submitting to Notion:', error);
    return res.status(500).json({
      error: 'Failed to submit lead',
      details: error.message
    });
  }
}
