import { defineConfig } from "umi";
import theme from "./src/antd-theme";

export default defineConfig({
  routes: [
    // 封面
    {
      path: "/",
      exact: true,
      component: "@/layouts/index",
      routes: [{ path: "/", component: "./index" }],
    },

    // 第一章
    {
      path: "/ch1",
      exact: true,
      component: "@/layouts/index",
      routes: [
        {
          path: "/ch1",
          component: "./ch1",
        },
      ],
    },

    // 第二章
    {
      path: "/ch2",
      exact: true,
      component: "@/layouts/index",
      routes: [
        {
          path: "/ch2",
          component: "./ch2",
        },
      ],
    },

    // 第三章
    {
      path: "/ch3",
      exact: true,
      component: "@/layouts/index",
      routes: [
        {
          path: "/ch3",
          component: "./ch3",
        },
      ],
    },

    // 第四章
    {
      path: "/ch4",
      exact: true,
      component: "@/layouts/index",
      routes: [
        {
          path: "/ch4",
          component: "./ch4",
        },
      ],
    },

    // 测试页面
    {
      path: "/test",
      exact: true,
      component: "@/test",
    },

    // 404 路由
    { component: "@/pages/404" },
  ],
  theme: theme,
  dynamicImport: { loading: "@/pages/loading" },
  plugins: ["./amap-plugin"],
  nodeModulesTransform: { type: "none" },
  fastRefresh: {},

  chainWebpack(memo) {
    memo.module
      .rule("media")
      .test(/\.(mp3|mp4|jpg)$/)
      .use("file-loader")
      .loader(require.resolve("file-loader"));
  },

  // hashHistory 无需配置 nginx 路由
  // history: { type: "hash" },
});
