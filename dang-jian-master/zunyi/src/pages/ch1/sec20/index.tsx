import * as Antd from "antd";
import { dynamic } from "umi";

// 采用代码拆分异步加载
export default {
  preview: dynamic({
    loader: async function () {
      const { default: preview } = await import("./preview");
      return preview;
    },
  }),
  article: dynamic({
    loader: async function () {
      const { default: article } = await import("./article");
      return article;
    },
  }),
};

