# Notion 整合设置指南

本指南说明如何将 Cafeting 表单与 Notion Database 整合。

## 📋 前置条件

- ✅ Notion 账号
- ✅ Vercel 账号
- ✅ 已完成 Notion Integration 和 Database 设置

---

## 🚀 部署步骤

### 1. 本地测试（可选）

如果要在本地测试，需要创建 `.env.local` 文件：

```bash
cp .env.example .env.local
```

编辑 `.env.local`，填入您的：
- `NOTION_API_KEY`: Notion Integration Token
- `NOTION_DATABASE_ID`: Notion Database ID

**注意：** Vercel Serverless Functions 仅在部署到 Vercel 后才能使用，本地开发环境无法测试此功能。

---

### 2. 部署到 Vercel

#### 步骤 A: 推送代码到 GitHub

```bash
git add .
git commit -m "feat: integrate Notion for lead form submission"
git push origin main
```

#### 步骤 B: 在 Vercel 中部署

1. 登录 [Vercel Dashboard](https://vercel.com)
2. 点击 **"Add New Project"**
3. 导入您的 GitHub 仓库
4. 在 **"Environment Variables"** 区域添加：
   - `NOTION_API_KEY`: 您的 Notion Integration Token
   - `NOTION_DATABASE_ID`: 您的 Notion Database ID
5. 点击 **Deploy**

---

### 3. 验证设置

部署完成后：

1. 访问您的 Vercel 部署网址
2. 前往 Cafeting Pass 页面
3. 填写并提交表单
4. 检查 Notion Database 是否收到新记录

---

## 🔧 Notion Database 栏位说明

您的 Notion Database 应包含以下栏位：

| 栏位名称 | 类型 | 必填 | 说明 |
|---------|------|------|------|
| **Name** | Title | ✅ | 用户姓名（标题栏位） |
| **Email** | Email | ✅ | 用户电子邮件 |
| **Role** | Select | ✅ | 选项：`遠端工作者`、`咖啡廳業者` |
| **備註** | Text | ❌ | 用户备注信息 |
| **提交時間** | Created time | 自动 | 自动记录提交时间 |

---

## ⚠️ 注意事项

1. **Role 栏位**必须包含以下两个选项（大小写完全一致）：
   - `遠端工作者`
   - `咖啡廳業者`

2. **Database Connection**: 确保 Integration 已连接到 Database
   - 打开 Database → 右上角 `⋯` → `Add connections` → 选择您的 Integration

3. **环境变量安全**:
   - ❌ 不要将 `.env.local` 提交到 Git
   - ✅ `.gitignore` 已包含此文件

---

## 🐛 故障排除

### 表单提交失败

1. 检查 Vercel 部署日志（Dashboard → Deployments → Functions）
2. 确认环境变量已正确设置
3. 确认 Role 栏位的选项名称完全一致

### Notion 未收到数据

1. 检查 Integration 是否已连接到 Database
2. 确认 Database ID 正确
3. 检查 Notion API Token 是否有效

---

## 📞 需要帮助？

如有问题，请检查：
- Vercel 部署日志
- 浏览器 Console 错误信息
- Notion Integration 权限设置
