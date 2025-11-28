# 快速启动指南

## 当前状态

✅ 后端服务器运行中：http://localhost:8080
✅ 前端开发服务器运行中：http://localhost:3001
✅ API 代理已配置

## ⚠️ 重要：需要配置环境变量

如果您遇到 500 错误，请确保在 `.env.local` 文件中配置了以下环境变量：

```env
# Notion API Key
NOTION_API_KEY=secret_你的_notion_api_key

# Cafeting Pass Database ID（已存在的表单）
NOTION_DATABASE_ID=你的_database_id

# Cafeting shop report Database ID（新的咖啡厅贡献表单）
NOTION_SHOP_REPORT_DATABASE_ID=你的_shop_report_database_id
```

## 如何获取 Database ID

1. 在 Notion 中打开 "Cafeting shop report" database
2. 复制页面 URL，例如：
   `https://www.notion.so/xxxxxxxxxxxxx?v=yyyyy`
3. Database ID 就是 `xxxxxxxxxxxxx` 这段

## 测试步骤

1. 访问：http://localhost:3001/contribute
2. 填写咖啡厅名称
3. 选择各项参数
4. 点击"提交资讯"
5. 检查 Notion database 是否收到新记录

## 查看后端日志

如果提交失败，查看后端服务器日志以了解错误详情。

## 故障排除

### 错误：Missing required fields
→ 确认所有表单字段都已填写

### 错误：Unauthorized  
→ 检查 NOTION_API_KEY 是否正确
→ 确认 integration 已连接到 database

### 错误：Object not found
→ 检查 NOTION_SHOP_REPORT_DATABASE_ID 是否正确
→ 确认 database 已分享给 integration

### Select 选项不匹配
→ 确认 Notion database 的 Select 选项与以下完全一致：

**Lighting 选项：**
- 光線明亮
- 光線柔和
- 光線昏暗

**Noise 选项：**
- 安靜環境
- 音量適中
- 有些吵雜

**Outlets 选项：**
- 插座充足
- 部分區域
- 數量有限

**Availability 选项：**
- 經常有空位
- 偶爾需要等待

**Time 选项：**
- 無時間限制
- 平日不限時
- 客滿才限時
- 有時間限制

## 更多帮助

详细设置说明请查看：`NOTION_SETUP.md`
