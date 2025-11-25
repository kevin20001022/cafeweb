# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

Cafeting 营销着陆页 - 一个为专业工作者提供咖啡厅工作空间预订服务的产品展示网站。使用 React 19 + TypeScript + Vite 构建的单页应用。

## 开发命令

```bash
# 安装依赖
npm install

# 本地开发（运行在 http://0.0.0.0:3000）
npm run dev

# 生产构建
npm run build

# 预览生产构建
npm preview
```

## 环境配置

- 需要在 `.env.local` 中设置 `GEMINI_API_KEY`
- Vite 配置会将此 API key 暴露为 `process.env.GEMINI_API_KEY` 和 `process.env.API_KEY`

## 架构要点

### 组件结构
应用采用单一入口点架构（App.tsx），按顺序渲染以下主要组件：
- **Header**: 顶部导航栏，包含主题切换功能
- **Hero**: 主视觉区，包含 CTA 和产品可视化
- **CustomerValue**: 用户价值主张展示
- **Features**: 五大核心功能展示（插座数量、环境寧靜度、光线优化、座位充足度、时长限制）
- **MerchantValue**: 商家价值主张
- **LeadForm**: 潜在客户收集表单（id: "join-form"）
- **Footer**: 页脚

### 主题系统
- 基于 Tailwind CSS 的 dark mode 类名切换
- 状态管理在 App.tsx 中，通过检测系统偏好初始化
- 主题切换通过在 `<html>` 元素添加/移除 `dark` 类实现

### 类型定义
所有共享类型定义在根目录的 `types.ts`:
- `UserRole`: 枚举类型（WORKER, MERCHANT）
- `LeadSchema`: 表单数据结构
- `FeaturePoint`: 功能特性点结构

### 路径别名
- 配置了 `@` 别名指向项目根目录
- 在 `vite.config.ts` 和 `tsconfig.json` 中均有配置

### 样式系统
- 使用 Tailwind CSS（通过 CDN 加载）
- 自定义颜色主题（cafeting-* 系列颜色）
- 内联在 `index.html` 中配置 Tailwind
- 自定义动画：float, slide-up, fade-in
- 背景图案：grid-pattern, dot-pattern, noise texture

### 表单提交
LeadForm 组件当前模拟 API 调用到 `/api/v1/leads`，实际未实现后端。提交后仅在控制台输出数据并显示成功消息。

### 图片资源
所有图片位于 `/public` 目录，包含：
- 功能截图（.jpg 和 .png 格式）
- map_feature, task_management, focus_mode, coffee_music, personal_profile
- 部分图片同时存在 .jpg 和 .png 版本

## 技术栈特点

- **React 19.2.0**: 使用最新版本的 React
- **TypeScript 5.8.2**: 严格类型检查
- **Vite 6.2.0**: 快速开发构建工具
- **无路由**: 单页滚动式着陆页，使用锚点导航
- **无状态管理库**: 仅使用 React useState/useEffect
- **CDN 依赖**: Tailwind CSS 和部分 React 导入通过 CDN

## 开发注意事项

- 修改样式配置需要编辑 `index.html` 中的 Tailwind config
- 组件均为展示型，无复杂业务逻辑
- 所有文本内容为繁体中文
- 响应式设计采用移动优先策略
