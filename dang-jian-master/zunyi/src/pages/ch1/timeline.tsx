import "@amap/amap-jsapi-types";
import React from "react";
import { d, l } from "../utils";
import { Timeline } from "antd";

interface Event {
  date: Date; // 日期
  location: AMap.LngLat; // 地点
  preview: React.ReactNode; // 预览
  article: React.ReactNode; // 文章
  timelineDot?: React.ReactNode; // 时间轴点
  timelineColor?: string; // 时间轴颜色
  timelineLabel: React.ReactNode; // 时间轴文本
}

import sec1 from "./sec1";
import sec2 from "./sec2";
import sec3 from "./sec3";
import sec4 from "./sec4";
import sec5 from "./sec5";
import sec6 from "./sec6";
import sec7 from "./sec7";
import sec8 from "./sec8";
import sec9 from "./sec9";
import sec10 from "./sec10";
import sec11 from "./sec11";
import sec12 from "./sec12";
import sec13 from "./sec13";
import sec14 from "./sec14";
import sec15 from "./sec15";
import sec16 from "./sec16";
import sec17 from "./sec17";
import sec18 from "./sec18";
import sec19 from "./sec19";
import sec20 from "./sec20";
import sec21 from "./sec21";
import sec22 from "./sec22";
import sec23 from "./sec23";
import sec24 from "./sec24";
import sec25 from "./sec25";
import sec26 from "./sec26";
import sec27 from "./sec27";
import sec28 from "./sec28";
import sec29 from "./sec29";
import sec30 from "./sec30";
import sec31 from "./sec31";
import sec32 from "./sec32";
import sec33 from "./sec33";
import sec34 from "./sec34";
import sec35 from "./sec35";

export default [
  {
    date: d(1978, 12, 18),
    location: l(116, 40),
    preview: <sec1.preview />,
    article: <sec1.article />,
    timelineLabel: "中共十一届三中全会",
  },
  {
    date: d(1979, 2, 17),
    location: l(105, 22),
    preview: <sec2.preview />,
    article: <sec2.article />,
    timelineLabel: "对越自卫反击战"
  },
  {
    date: d(1979, 3, 30),
    location: l(116.01, 40),
    preview: <sec3.preview />,
    article: <sec3.article />,
    timelineLabel: "邓小平发表《坚持四项基本原则》的讲话"
  },
  {
    date: d(1979, 12, 6),
    location: l(116.02, 40),
    preview: <sec4.preview />,
    article: <sec4.article />,
    timelineLabel:"邓小平提出“小康”的概念"
  },
  {
    date: d(1980, 2, 23),
    location: l(116.03, 40),
    preview: <sec5.preview />,
    article: <sec5.article />,
    timelineLabel:"中共十一届五中全会"
  },
  {
    date: d(1980, 8, 15),
    location: l(114, 23),
    preview: <sec6.preview />,
    article: <sec6.article />,
    timelineLabel:"深圳、珠海经济特区建立"
  },
  {
    date: d(1980, 10, 1),
    location: l(118.06, 24.5),
    preview: <sec7.preview />,
    article: <sec7.article />,
    timelineLabel:"厦门经济特区建立"
  },
  {
    date: d(1981, 9, 1),
    location: l(116.04, 40),
    preview: <sec8.preview />,
    article: <sec8.article />,
    timelineLabel:"中共十二大召开"
  },
  {
    date: d(1981, 11, 1),
    location: l(116.71, 23.37),
    preview: <sec9.preview />,
    article: <sec9.article />,
    timelineLabel:"汕头经济特区建立"
  },
  {
    date: d(1984, 4, 28),
    location: l(105, 23),
    preview: <sec10.preview/>,
    article: <sec10.article />,
    timelineLabel:"老山战役"
  },
  {
    date: d(1987, 10, 25),
    location: l(116.05, 40),
    preview: <sec11.preview/>,
    article: <sec11.article />,
    timelineLabel:"中共十三大召开"
  },
  {
    date: d(1988, 3, 14),
    location: l(114, 10),
    preview: <sec12.preview/>,
    article: <sec12.article />,
    timelineLabel:"南沙海战"
  },
  {
    date: d(1988, 4, 13),
    location: l(109, 19),
    preview: <sec13.preview/>,
    article: <sec13.article />,
    timelineLabel:"海南经济特区建立"
  },
  {
    date: d(1992, 1, 18),
    location: l(114.08, 22.54),
    preview: <sec14.preview/>,
    article: <sec14.article />,
    timelineLabel:"邓小平南方谈话"
  },
  {
    date: d(1992, 10, 12),
    location: l(116.06, 40),
    preview: <sec15.preview/>,
    article: <sec15.article />,
    timelineLabel:"中共十四大召开"
  },
  {
    date: d(1993, 11, 11),
    location: l(116.07, 40),
    preview: <sec16.preview/>,
    article: <sec16.article />,
    timelineLabel:"中共十四届三中全会"
  },
  {
    date: d(1997, 7, 1),
    location: l(114.2, 22.3),
    preview: <sec17.preview/>,
    article: <sec17.article />,
    timelineLabel:"香港回归"
  },
  {
    date: d(1997, 9, 12),
    location: l(116.08, 40),
    preview: <sec18.preview/>,
    article: <sec18.article />,
    timelineLabel:"中共十五大召开"
  },
  {
    date: d(1999, 12, 20),
    location: l(113.5, 22.2),
    preview: <sec19.preview/>,
    article: <sec19.article />,
    timelineLabel:"澳门回归"
  },
  {
    date: d(2000, 10, 9),
    location: l(116.09, 40),
    preview: <sec20.preview/>,
    article: <sec20.article />,
    timelineLabel:"中共十五届五中全会"
  },
  {
    date: d(2001, 7, 13),
    location: l(37, 55),
    preview: <sec21.preview/>,
    article: <sec21.article />,
    timelineLabel:"申奥成功"
  },
  {
    date: d(2001, 11, 10),
    location: l(52, 25),
    preview: <sec22.preview/>,
    article: <sec22.article />,
    timelineLabel:"中国加入世界贸易组织"
  },
  {
    date: d(2002, 7, 4),
    location: l(116.10, 40),
    preview: <sec23.preview/>,
    article: <sec23.article />,
    timelineLabel:"西气东输工程全线开工"
  },
  {
    date: d(2002, 11, 8),
    location: l(116.11, 40),
    preview: <sec24.preview/>,
    article: <sec24.article />,
    timelineLabel:"中共十六大召开"
  },
  {
    date: d(2002, 12, 27),
    location: l(116.12, 40),
    preview: <sec25.preview/>,
    article: <sec25.article />,
    timelineLabel:"南水北调工程正式开工"
  },
  {
    date: d(2003, 10, 15),
    location: l(98.6, 39.65),
    preview: <sec26.preview/>,
    article: <sec26.article />,
    timelineLabel:"中国首次载人航天飞船飞行成功"
  },
  {
    date: d(2005, 3, 14),
    location: l(116.13, 40),
    preview: <sec27.preview/>,
    article: <sec27.article />,
    timelineLabel:"《反分裂国家法》通过"
  },
  {
    date: d(2005, 4, 7),
    location: l(116.14, 40),
    preview: <sec28.preview/>,
    article: <sec28.article />,
    timelineLabel:"连战宋楚瑜郁慕明先后访问大陆"
  },
  {
    date: d(2006, 7, 1),
    location: l(91, 40),
    preview: <sec29.preview/>,
    article: <sec29.article />,
    timelineLabel:"青藏铁路顺利通车"
  },
  {
    date: d(2007, 10, 15),
    location: l(116.15, 40),
    preview: <sec30.preview/>,
    article: <sec30.article />,
    timelineLabel:"中共十七大召开"
  },
  {
    date: d(2007, 10, 24),
    location: l(102, 28),
    preview: <sec31.preview/>,
    article: <sec31.article />,
    timelineLabel:"嫦娥一号在西昌卫星发射中心发射升空"
  },
  {
    date: d(2008, 8, 8),
    location: l(116.16, 40),
    preview: <sec32.preview/>,
    article: <sec32.article />,
    timelineLabel:"成功举办2008年北京奥运会"
  },
  {
    date: d(2010, 12, 31),
    location: l(116.17, 40),
    preview: <sec33.preview/>,
    article: <sec33.article />,
    timelineLabel:"成为世界第二大经济体"
  },
  {
    date: d(2012, 9, 25),
    location: l(120.37, 36.05),
    preview: <sec34.preview/>,
    article: <sec34.article />,
    timelineLabel:"中国首艘航母“辽宁舰”交付使用"
  },
  {
    date: d(2012, 11, 8),
    location: l(116.18, 40),
    preview: <sec35.preview/>,
    article: <sec35.article />,
    timelineLabel:"中共十八大召开"
  },
] as Event[];
