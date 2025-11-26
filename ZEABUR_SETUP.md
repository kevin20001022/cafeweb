# Zeabur 部署指南

本指南说明如何在 Zeabur 上部署 Cafeting 应用，并整合 Notion Database。

## 🏗️ 架构说明

由于 Zeabur 不支持 Vercel 的 Serverless Functions 格式，本项目已改为使用 **Express.js 后端服务器**：

- **前端**：React + Vite（静态文件）
- **后端**：Express.js 服务器（处理 API 请求）
- **API**：`/api/submit-lead`（POST 请求）

---

## 🚀 部署步骤

### 1. 确保代码已推送到 GitHub

```bash
git add .
git commit -m "feat: add Express server for Zeabur deployment"
git push origin main
```

### 2. 在 Zeabur 部署

1. 登录 [Zeabur Dashboard](https://zeabur.com)
2. 点击 **Create New Project**
3. 选择 **Deploy from GitHub**
4. 选择仓库：`kevin20001022/cafeweb`
5. Zeabur 会自动检测并开始构建

---

### 3. 设置环境变量

在 Zeabur 项目设置中添加以下环境变量：

| 变量名 | 值 | 说明 |
|--------|-----|------|
| `NOTION_API_KEY` | `secret_xxx...` | Notion Integration Token |
| `NOTION_DATABASE_ID` | `xxxxx` | Notion Database ID（32位字符） |
| `NODE_ENV` | `production` | 生产环境标识 |

---

### 4. 重新部署

设置环境变量后：
1. 在 Zeabur Dashboard 中点击 **Redeploy**
2. 或推送新的提交触发自动部署

---

## ✅ 验证部署

1. 访问 Zeabur 给您的域名（如：`https://cafeting.zeabur.app`）
2. 前往 **Cafeting Pass** 页面
3. 填写并提交表单
4. 检查 Notion Database 是否收到新记录

---

## 🔍 故障排除

### 表单提交失败

**检查服务器日志**：
1. Zeabur Dashboard → 您的服务 → **Logs**
2. 查看是否有错误信息

**常见问题**：
- ❌ 环境变量未设置或错误
- ❌ Notion Database 栏位名称不匹配
- ❌ Integration 未连接到 Database

### 检查 API 健康状态

访问：`https://您的域名.zeabur.app/api/health`

应返回：
```json
{"status":"ok"}
```

### Role 栏位错误

确保 Notion Database 的 **Role** 栏位包含以下选项：
- `遠端工作者`
- `咖啡廳業者`

---

## 📦 本地测试

如果要在本地测试 Express 服务器：

1. 创建 `.env.local`：
   ```bash
   NOTION_API_KEY=your_token_here
   NOTION_DATABASE_ID=your_database_id_here
   ```

2. 构建前端：
   ```bash
   npm run build
   ```

3. 启动服务器：
   ```bash
   npm start
   ```

4. 访问：`http://localhost:3000`

---

## 🆚 与 Vercel 的差异

| 特性 | Vercel | Zeabur |
|------|--------|--------|
| API 格式 | Serverless Functions | Express.js Server |
| 部署目录 | `/api/*.ts` | `server.js` |
| 静态文件 | 自动处理 | 通过 Express 提供 |
| 环境变量 | Dashboard 设置 | Dashboard 设置 |

---

## 📞 需要帮助？

如有问题，请检查：
- Zeabur 服务日志
- 浏览器 Console 错误信息
- 环境变量是否正确设置
- Notion Integration 权限
