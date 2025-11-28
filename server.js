import express from 'express';
import cors from 'cors';
import { Client } from '@notionhq/client';

const app = express();
const PORT = process.env.PORT || 8080;

// 中间件
app.use(cors());
app.use(express.json());

// 初始化 Notion 客户端
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;
const SHOP_REPORT_DATABASE_ID = process.env.NOTION_SHOP_REPORT_DATABASE_ID;

// ⚠️ API 路由必须在静态文件服务之前！
// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// API 路由：提交表单到 Notion
app.post('/api/submit-lead', async (req, res) => {
  try {
    const { name, email, role, notes } = req.body;

    // 调试：打印接收到的数据
    console.log('Received form data:', { name, email, role, notes });

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
            name: role === 'worker' ? '遠端工作者' : '咖啡廳業者',
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

// API 路由：提交咖啡厅资讯到 Notion
app.post('/api/submit-cafe', async (req, res) => {
  try {
    const { cafeName, lighting, noise, socket, seats, timeLimit } = req.body;

    // 调试：打印接收到的数据
    console.log('Received cafe data:', { cafeName, lighting, noise, socket, seats, timeLimit });

    // 验证必填字段
    if (!cafeName || !lighting || !noise || !socket || !seats || !timeLimit) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // 映射选项值到中文
    const lightingMap = {
      'bright': '光線明亮',
      'soft': '光線柔和',
      'dim': '光線昏暗'
    };

    const noiseMap = {
      'quiet': '安靜環境',
      'moderate': '音量適中',
      'noisy': '有些吵雜'
    };

    const socketMap = {
      'abundant': '插座充足',
      'partial': '部分區域',
      'limited': '數量有限'
    };

    const seatsMap = {
      'often_available': '經常有空位',
      'sometimes_wait': '偶爾需要等待'
    };

    const timeLimitMap = {
      'no_limit': '無時間限制',
      'weekday_unlimited': '平日不限時',
      'full_only': '客滿才限時',
      'time_limited': '有時間限制'
    };

    // 准备要创建的数据
    const pageData = {
      parent: {
        database_id: SHOP_REPORT_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: cafeName,
              },
            },
          ],
        },
        Lighting: {
          select: {
            name: lightingMap[lighting],
          },
        },
        Noise: {
          select: {
            name: noiseMap[noise],
          },
        },
        Outlets: {
          select: {
            name: socketMap[socket],
          },
        },
        Availability: {
          select: {
            name: seatsMap[seats],
          },
        },
        Time: {
          select: {
            name: timeLimitMap[timeLimit],
          },
        },
      },
    };

    // 调试：打印要提交的数据
    console.log('Submitting to Notion:', JSON.stringify(pageData, null, 2));

    // 先获取 database schema 来检查欄位
    try {
      const database = await notion.databases.retrieve({ database_id: SHOP_REPORT_DATABASE_ID });
      console.log('Database properties:', Object.keys(database.properties));
    } catch (err) {
      console.error('Failed to retrieve database schema:', err.message);
    }

    // 创建 Notion 页面
    await notion.pages.create(pageData);

    return res.status(200).json({
      success: true,
      message: 'Cafe info submitted successfully'
    });

  } catch (error) {
    console.error('Error submitting cafe to Notion:', error);
    return res.status(500).json({
      error: 'Failed to submit cafe info',
      details: error.message
    });
  }
});

// 静态文件服务（必须在 API 路由之后）
app.use(express.static('dist'));

// 所有其他路由返回 index.html（SPA 支持）
// Express 5 不支持 '*'，改用中间件
app.use((req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
