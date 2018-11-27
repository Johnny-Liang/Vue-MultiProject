# Vue-MultiProject

#### 项目介绍
前端Vue基于portal进行多项目打包Demo，支持单独按需加载业务代码，满足多团队协作的代码分割与公用部分维护。


#### 安装教程

1. cd Vue-MultiProject
2. npm run install

#### 使用说明

1. 开发portal时
- cd portal
- npm run dev
2. 开发Project时（需要portal为基础，先进行portal build构建）
- cd portal
- npm run build
- cd ProjectA
- npm run dev
