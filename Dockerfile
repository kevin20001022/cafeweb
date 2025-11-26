# 使用 Node.js 20 镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 复制 package 文件
COPY package*.json ./

# 安装依赖（包括 devDependencies，因为需要构建）
RUN npm ci

# 复制所有源代码
COPY . .

# 构建前端
RUN npm run build

# 暴露端口（Zeabur 会自动映射 PORT 环境变量）
EXPOSE 8080

# 设置环境变量
ENV NODE_ENV=production
ENV PORT=8080

# 启动 Express 服务器
CMD ["node", "server.js"]
