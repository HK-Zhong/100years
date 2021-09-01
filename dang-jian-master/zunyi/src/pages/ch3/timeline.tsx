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


export default [
  {
    date: d(1979,1, 1),
    location: l(116, 40),
    preview: <sec1.preview />,
    article: <sec1.article />,
    timelineLabel: "《告台湾同胞书》发表",
  },
  {
    date: d(1979,2, 17),
    location: l(105, 22),
    preview: <sec2.preview />,
    article: <sec2.article />,
    timelineLabel: "对越自卫反击战"
  },
  {
    date: d(1979, 3,30),
    location: l(116, 40),
    preview: <sec3.preview />,
    article: <sec3.article />,
    timelineLabel: "邓小平发表《坚持四项基本原则》的讲话"
  },
  {
    date: d(1980,2,23),
    location: l(116, 40),
    preview: <sec4.preview />,
    article: <sec4.article />,
    timelineLabel:"《关于为刘少奇同志平反的决议》通过"
  },
  {
    date: d(1980, 8, 18),
    location: l(116, 40),
    preview: <sec5.preview />,
    article: <sec5.article />,
    timelineLabel:"中共中央政治局在北京召开扩大会议"
  },
  {
    date: d(1980, 8, 25),
    location: l(115, 22),
    preview: <sec6.preview />,
    article: <sec6.article />,
    timelineLabel:"深圳、珠海、厦门经济特区正式批准建立"
  },
  {
    date: d(1981, 4, 1),
    location: l(116, 23),
    preview: <sec7.preview />,
    article: <sec7.article />,
    timelineLabel:"汕头经济特区批准成立"
  },
  {
    date: d(1981, 9, 30),
    location: l(116.04, 40),
    preview: <sec8.preview />,
    article: <sec8.article />,
    timelineLabel:"叶剑英就关于台湾回归问题提出九条方针政策"
  },
  {
    date: d(1982, 9, 1),
    location: l(116, 39),
    preview: <sec9.preview />,
    article: <sec9.article />,
    timelineLabel:"中共第十二次全国代表大会"
  },
  {
    date: d(1983, 11, 3),
    location: l(116, 40),
    preview: <sec10.preview/>,
    article: <sec10.article />,
    timelineLabel:"中国民主建国会第四次全国代表大会等会议召开"
  },
  {
    date: d(1983,3,13),
    location: l(116,40),
    preview: <sec11.preview/>,
    article: <sec11.article />,
    timelineLabel:"纪念马克思逝世一百周年"
  },
  {
    date: d(1984,3,26),
    location: l(116,40),
    preview: <sec12.preview/>,
    article: <sec12.article />,
    timelineLabel:"沿海部分城市座谈会在北京召开"
  },
  {
    date: d(1984,4,16),
    location: l(119,31),
    preview: <sec13.preview/>,
    article: <sec13.article/>,
    timelineLabel:"城市经济体制改革座谈会在常州市召开"
  },
  {
    date: d(1984,9,26),
    location: l(116,40),
    preview: <sec14.preview/>,
    article: <sec14.article />,
    timelineLabel:"中英两国政府关于香港问题的联合声明"
  },
  {
    date: d(1987,10,25),
    location: l(116,40),
    preview: <sec15.preview/>,
    article: <sec15.article />,
    timelineLabel:"中共第十三次全国代表大会"
  },
  {
    date: d(1987,3,26),
    location: l(116.2,39.5),
    preview: <sec16.preview/>,
    article: <sec16.article />,
    timelineLabel:"中国和葡萄牙两国政府关于澳门问题的联合声明在北京草签"
  },
  {
    date: d(1988,4,13),
    location: l(110,19),
    preview: <sec17.preview/>,
    article: <sec17.article />,
    timelineLabel:"海南省和海南经济特区同时成立"
  },
  {
    date: d(1989,11,6),
    location: l(116,40),
    preview: <sec18.preview/>,
    article: <sec18.article />,
    timelineLabel:"中共十三届五中全会在北京召开"
  },
  {
    date: d(1990,11,26),
    location: l(121,31),
    preview: <sec19.preview/>,
    article: <sec19.article />,
    timelineLabel:"上海证券交易所成立"
  },
  {
    date: d(1991, 1, 28),
    location: l(121, 31),
    preview: <sec20.preview/>,
    article: <sec20.article />,
    timelineLabel:"邓小平视察上海"
  },
  {
    date: d(1991, 12, 15),
    location: l(121, 30),
    preview: <sec21.preview/>,
    article: <sec21.article />,
    timelineLabel:"秦山核电站并网发电"
  },
  {
    date: d(1992, 1, 18),
    location: l(118, 25),
    preview: <sec22.preview/>,
    article: <sec22.article />,
    timelineLabel:"邓小平发表著名的“南方谈话”"
  },
  {
    date: d(1992, 10, 12),
    location: l(116.10, 40),
    preview: <sec23.preview/>,
    article: <sec23.article />,
    timelineLabel:"中共第十四次全国代表大会"
  },
  {
    date: d(1993, 4, 27),
    location: l(104, 2),
    preview: <sec24.preview/>,
    article: <sec24.article />,
    timelineLabel:"汪道涵和辜振甫在新加坡举行会谈"
  },
  {
    date: d(1994, 2, 28),
    location: l(116, 40),
    preview: <sec25.preview/>,
    article: <sec25.article />,
    timelineLabel:"全国扶贫开发工作会议在北京召开"
  },
  {
    date: d(1995, 5, 6),
    location: l(116, 40),
    preview: <sec26.preview/>,
    article: <sec26.article />,
    timelineLabel:"提出科教兴国的战略"
  },
  {
    date: d(1996, 4, 26),
    location: l(121, 31),
    preview: <sec27.preview/>,
    article: <sec27.article />,
    timelineLabel:"与周边国家在上海共同签署关于在边境地区加强军事领域信任的协定"
  },
  {
    date: d(1996, 7, 18),
    location: l(116, 40),
    preview: <sec28.preview/>,
    article: <sec28.article />,
    timelineLabel:"中国政府对日本右翼分子表示“严重关切”"
  },
  {
    date: d(1996, 9, 26),
    location: l(116, 40),
    preview: <sec29.preview/>,
    article: <sec29.article />,
    timelineLabel:"江泽民视察人民日报社并发表重要讲话"
  },
  {
    date: d(1997,7 ,1 ),
    location: l(114, 22),
    preview: <sec30.preview/>,
    article: <sec30.article />,
    timelineLabel:"香港回归"
  },
  {
    date: d(1997,9 , 12),
    location: l(116.15, 40),
    preview: <sec31.preview/>,
    article: <sec31.article />,
    timelineLabel:"中共第十五次全国代表大会"
  },
  {
    date: d(1998, 7, 1),
    location: l(125, 44),
    preview: <sec32.preview/>,
    article: <sec32.article />,
    timelineLabel:"抗洪救灾"
  },


] as Event[];
