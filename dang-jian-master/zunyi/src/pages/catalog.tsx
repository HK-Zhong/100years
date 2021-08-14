import React from "react";
import { Menu } from "antd";

const { SubMenu, Item } = Menu;

// 导出目录菜单
// 注意，这里的 key 要与路由配置（.umirc.ts）对应！
export default [
  <Item key="/ch1">第一章：改革开放</Item>,
  <Item key="/ch2">第二章：[建设中]</Item>,
  <Item key="/ch3">第三章：[建设中]</Item>,
  <Item key="/ch4">第四章：中国特色社会主义新时代</Item>,
];
