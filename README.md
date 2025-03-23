# bxk-monorepo

一个使用 Verdaccio + Changeset + Turbo + pnpm 的 monorepo 项目

## 项目结构

```
bxk-monorepo/
├── apps/       # 应用项目
├── packages/   # 共享包
```

## 技术栈

- 包管理器: pnpm
- Monorepo 工具: Turborepo
- 版本控制: Changeset
- 私有仓库: Verdaccio
- 开发语言: TypeScript

## 命令脚本

- `pnpm build` - 构建所有包和应用
- `pnpm clean` - 清理构建产物
- `pnpm changeset` - 创建新的变更集
- `pnpm version` - 更新版本和变更日志
- `pnpm publish` - 发布包到仓库

## 开发指南

1. 安装依赖:
```bash
pnpm install
```

2. 构建所有包:
```bash
pnpm build
```

## 许可证

ISC