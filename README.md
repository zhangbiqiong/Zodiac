# 十二星座 App

一个使用 Expo + expo-router 构建的跨平台应用，提供十二星座的基础信息与详情展示。数据为本地静态整理，可离线使用；界面适配 iOS/Android/Web。

## 功能特性

- 列表页：双列网格展示 12 星座，使用 Themed 组件适配明暗主题
- 详情页：展示符号、日期范围、元素、守护星、代表色、性格标签，并配有本地配图（含默认回退图）
- 导航与路由：采用 `expo-router` 基于文件的路由
- 交互体验：iOS 标签栏毛玻璃背景与轻触感反馈

## 技术栈

- Expo SDK 53 / React 19 / React Native 0.79
- 路由：`expo-router@5`
- 导航：`@react-navigation`（底部标签、元素工具）
- 动画：`react-native-reanimated`
- 字体与状态栏：`expo-font`、`expo-status-bar`
- 交互与视觉：`expo-haptics`、`expo-blur`、`expo-symbols`、`@expo/vector-icons`

## 目录结构（节选）

```
my-app/
├── app/
│   ├── _layout.tsx              # 根布局（主题、字体加载、Stack）
│   ├── (tabs)/
│   │   ├── _layout.tsx          # 底部标签页布局（Tab 配置）
│   │   ├── index.tsx            # 星座网格列表
│   │   └── explore.tsx          # 关于页
│   ├── +not-found.tsx
│   └── zodiac/[sign].tsx        # 星座详情
├── components/                  # 复用组件（IconSymbol、HapticTab、Themed* 等）
├── constants/zodiac.ts          # 星座静态数据
├── assets/images/               # 启动图标、星座图片与默认图
├── package.json
└── README.md
```

## 开发与运行

环境要求：Node >= 18，pnpm >= 8。

```bash
# 安装依赖（项目强制使用 pnpm）
pnpm install

# 启动开发服务（选择平台运行）
pnpm start
pnpm ios
pnpm android
pnpm web
```

首次启动会进行字体异步加载；iOS 平台的底部标签栏使用毛玻璃背景，Web/Android 上为不透明背景。

## 脚本

```bash
pnpm lint           # 代码风格检查
pnpm reset-project  # 将模板代码移至 app-example 并重置 app 目录（谨慎使用）
```

## 构建

建议使用 EAS 进行原生构建，详见 Expo 官方文档。

- Expo 文档：<https://docs.expo.dev/>
- expo-router 文档：<https://expo.github.io/router/>

## 许可

本项目用于学习示例，若需商用请根据业务需要补充 License。
