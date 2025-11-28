# Notion 整合設定指南

## 1. 取得 Notion API Key

1. 前往 [Notion Integrations](https://www.notion.so/my-integrations)
2. 點擊 "New integration"
3. 填寫名稱（例如：Cafeting Integration）
4. 選擇您的 workspace
5. 提交後，複製 "Internal Integration Token"（格式：`secret_xxxxx`）

## 2. 設定 Database

### Database 1: Cafeting Pass 潛在客戶（已存在）
- 名稱：任意
- 必要欄位：
  - Name (Title)
  - Email (Email)
  - Role (Select)
  - 備註 (Rich Text)

### Database 2: Cafeting shop report（咖啡廳貢獻資訊）
- 名稱：**Cafeting shop report**
- 必要欄位：
  - **Name** (Title) - 咖啡廳名稱
  - **Lighting** (Select) - 光線
    - 選項：光線明亮、光線柔和、光線昏暗
  - **Noise** (Select) - 音量
    - 選項：安靜環境、音量適中、有些吵雜
  - **Outlets** (Select) - 插座
    - 選項：插座充足、部分區域、數量有限
  - **Availability** (Select) - 座位
    - 選項：經常有空位、偶爾需要等待
  - **Time** (Select) - 時間限制
    - 選項：無時間限制、平日不限時、客滿才限時、有時間限制

## 3. 連接 Database 到 Integration

1. 在 Notion 中開啟 "Cafeting shop report" database
2. 點擊右上角的 "..." 選單
3. 選擇 "Add connections"
4. 找到並選擇您剛創建的 integration
5. 確認連接

對第一個 database（Cafeting Pass）重複相同步驟。

## 4. 取得 Database ID

### 方法一：從 URL 取得
1. 在 Notion 中開啟 database（整頁模式）
2. 複製 URL，格式如：`https://www.notion.so/xxxxxxxxxxxxx?v=yyyyy`
3. Database ID 就是 `xxxxxxxxxxxxx` 這段（32位字符，含破折號）

### 方法二：分享連結
1. 點擊 database 右上角的 "Share"
2. 點擊 "Copy link"
3. 從連結中提取 ID

## 5. 設定環境變數

在專案根目錄的 `.env.local` 文件中添加：

```env
# Notion API Key（兩個 database 共用同一個 API key）
NOTION_API_KEY=secret_your_actual_token_here

# Cafeting Pass Database ID
NOTION_DATABASE_ID=your_first_database_id_here

# Cafeting shop report Database ID
NOTION_SHOP_REPORT_DATABASE_ID=your_shop_report_database_id_here
```

## 6. Notion Database 欄位映射

| 前端欄位 | Notion 欄位 | 類型 | 中文選項值 |
|---------|------------|------|-----------|
| cafeName | Name | Title | - |
| lighting | Lighting | Select | 光線明亮、光線柔和、光線昏暗 |
| noise | Noise | Select | 安靜環境、音量適中、有些吵雜 |
| socket | Outlets | Select | 插座充足、部分區域、數量有限 |
| seats | Availability | Select | 經常有空位、偶爾需要等待 |
| timeLimit | Time | Select | 無時間限制、平日不限時、客滿才限時、有時間限制 |

## 7. 測試設定

### 啟動服務器
```bash
# 啟動後端服務器（port 8080）
npm start

# 在另一個終端啟動前端開發服務器（port 3001）
npm run dev
```

### 測試提交
1. 打開瀏覽器訪問 http://localhost:3001/contribute
2. 填寫咖啡廳名稱和選擇參數
3. 點擊提交
4. 檢查 Notion database 是否收到新記錄

## 8. 常見問題

### 錯誤：Unauthorized
- 確認 NOTION_API_KEY 是否正確
- 確認 integration 已連接到 database

### 錯誤：Object not found
- 確認 NOTION_SHOP_REPORT_DATABASE_ID 是否正確
- 確認 integration 有權限訪問該 database

### Select 選項不匹配
- 確認 Notion database 中的 Select 選項名稱與設定文檔完全一致
- 選項名稱必須完全匹配（包含大小寫）
