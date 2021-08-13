# 网页设计思路

网页的内容采用“书”的方式进行组织，每个章节对应 ./pages 下面的一个组件（通常也就是一个文件夹）。

书的封面（首页）在 ./index.tsx 中定义。

书的目录（也就是左侧的菜单）在 ./catalog.tsx 中定义。

每章的内容相互独立，在框架布局下允许自由发挥。

404.tsx 为 404 页面，loading.tsx 为加载页面。

# 如何添加新的章节

添加新的章节比较复杂：

- 在 ./pages 下面创建一个模块，采用默认导出的方式导出一个 React 组件。

  具体怎么写多说无益。

- 修改 ../umirc.ts，为该章节添加路由，怎么编写参考现有样例。

  注意：

  - exact 要为 true
  - path 不必与模块名相同
  - component 为模块的正确路径
  - 第一层路由指向组件应该是 @/layouts/index
  - 不要加在 404 路由之后

- 在 catalog.tsx 中为章节添加目录项，给用户提供入口。

  注意：**Item 组件的 key 属性要与章节的路由配置完全一致！**即使嵌套在 SubMenu 中也要写完整路径！