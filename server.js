import express from 'express';
import cors from 'cors';
import { Client } from '@notionhq/client';

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

// 初始化 Notion 客户端
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

// API 路由：提交表单到 Notion
app.post('/api/submit-lead', async (req, res) => {
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

  } catch (error) {
    console.error('Error submitting to Notion:', error);
    return res.status(500).json({
      error: 'Failed to submit lead',
      details: error.message
    });
  }
});

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 所有其他路由返回 index.html（SPA 支持）
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
