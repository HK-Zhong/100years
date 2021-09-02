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
import sec36 from "./sec36";
import sec37 from "./sec37";
import sec38 from "./sec38";
import sec39 from "./sec39";
import sec40 from "./sec40";
import sec41 from "./sec41";
import sec42 from "./sec42";
import sec43 from "./sec43";
import sec44 from "./sec44";
import sec45 from "./sec45";
import sec46 from "./sec46";
import sec47 from "./sec47";
import sec48 from "./sec48";
import sec49 from "./sec49";
import sec50 from "./sec50";
import sec51 from "./sec51";
import sec52 from "./sec52";
import sec53 from "./sec53";
import sec54 from "./sec54";
import sec55 from "./sec55";
import sec56 from "./sec56";
import sec57 from "./sec57";
import sec58 from "./sec58";
import sec59 from "./sec59";
import sec60 from "./sec60";
import sec61 from "./sec61";
import sec62 from "./sec62";



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

  {
    date: d(1999,5,8),
    location: l(20.5,44.5),
    preview: <sec33.preview/>,
    article: <sec33.article />,
    timelineLabel:"北约袭击中国驻南斯拉夫大使馆"
  },
  {
    date: d(1999,10,1),
    location: l(116.2,39.6),
    preview: <sec34.preview/>,
    article: <sec34.article />,
    timelineLabel:"庆祝中华人民共和国成立50周年大会"
  },

  {
    date: d(1999,11,20),
    location: l(98.2,39.5),
    preview: <sec35.preview/>,
    article: <sec35.article />,
    timelineLabel:"第一艘载人航天试验飞船"
  },

  {
    date: d(1999,12,20),
    location: l(113.3,22.2),
    preview: <sec36.preview/>,
    article: <sec36.article />,
    timelineLabel:"澳门回归"
  },
  {
    date: d(2000,1,24),
    location: l(116.2,39.6),
    preview: <sec37.preview/>,
    article: <sec37.article />,
    timelineLabel:"西部地区开发会议在京举行"
  },
  {
    date: d(2000,2,20),
    location: l(109.4,20.2),
    preview: <sec38.preview/>,
    article: <sec38.article />,
    timelineLabel:"江泽民提出“三个代表”的重要思想"
  },
  {
    date: d(2001,6,15),
    location: l(121.4,31.4),
    preview: <sec39.preview/>,
    article: <sec39.article />,
    timelineLabel:"“上海合作组织”成员国元首会议"
  },
  {
    date: d(2001,7,1),
    location: l(116.2,39.6),
    preview: <sec40.preview/>,
    article: <sec40.article />,
    timelineLabel:"庆祝中国共产党成立八十周年大会"
  },
  {
    date: d(2001,7,13),
    location: l(116.3,39.6),
    preview: <sec41.preview/>,
    article: <sec41.article />,
    timelineLabel:"北京申办2008年奥运会成功"
  },
  {
    date: d(2001,7,19),
    location: l(91.2,29.5),
    preview: <sec42.preview/>,
    article: <sec42.article />,
    timelineLabel:"庆祝西藏和平解放50周年大会"
  },
  {
    date: d(2001,10,21),
    location: l(121.3,31.3),
    preview: <sec43.preview/>,
    article: <sec43.article />,
    timelineLabel:"亚太经合组织第九次领导人非正式会议"
  },
  {
    date: d(2001,11,10),
    location: l(51.4,25.3),
    preview: <sec44.preview/>,
    article: <sec44.article />,
    timelineLabel:"中国正式成为WTO成员"
  },
  {
    date: d(2002,11,8),
    location: l(116.2,39.6),
    preview: <sec45.preview/>,
    article: <sec45.article />,
    timelineLabel:"中国共产党第十六次全国代表大会开幕"
  },
  {
    date: d(2003,10,15),
    location: l(98.4,39.5),
    preview: <sec46.preview/>,
    article: <sec46.article />,
    timelineLabel:"中国首次载人航天飞船飞行成功"
  },
  {
    date: d(2003,4,14),
    location: l(109.4,20.2),
    preview: <sec47.preview/>,
    article: <sec47.article />,
    timelineLabel:"非典事件"
  },
  {
    date: d(2005,4,29),
    location: l(116.2,39.5),
    preview: <sec48.preview/>,
    article: <sec48.article />,
    timelineLabel:"连战宋楚瑜郁慕明先后访问大陆"
  },
  {
    date: d(2006,1,12),
    location: l(116.2,39.6),
    preview: <sec49.preview/>,
    article: <sec49.article />,
    timelineLabel:"中国政府首次正式发表《中国对非洲政策文件》"
  },
  {
    date: d(2006,7,1),
    location: l(91.2,29.5),
    preview: <sec50.preview/>,
    article: <sec50.article />,
    timelineLabel:"青藏铁路全线建成通车"
  },
  {
    date: d(2007,10,2),
    location: l(121.3,31.2),
    preview: <sec51.preview/>,
    article: <sec51.article />,
    timelineLabel:"世界夏季特殊奥运会隆重举行"
  },
  {
    date: d(2007,10,15),
    location: l(116.2,39.6),
    preview: <sec52.preview/>,
    article: <sec52.article />,
    timelineLabel:"中国共产党第十七次全国代表大会隆重开幕"
  },
  {
    date: d(2007,10,24),
    location: l(102.6,27.6),
    preview: <sec53.preview/>,
    article: <sec53.article />,
    timelineLabel:"嫦娥一号发射升空"
  },
  {
    date: d(2008,5,12),
    location: l(103.5,31.2),
    preview: <sec54.preview/>,
    article: <sec54.article />,
    timelineLabel:"四川汶川发生里氏８级特大地震"
  },  {
    date: d(2008,8,8),
    location: l(116.3,39.6),
    preview: <sec55.preview/>,
    article: <sec55.article />,
    timelineLabel:"北京成功举办第二十九届奥运会"
  },  {
    date: d(2008,9,25),
    location: l(98.4,39.4),
    preview: <sec56.preview/>,
    article: <sec56.article />,
    timelineLabel:"神舟七号飞船发射"
  },  {
    date: d(2008,10,27),
    location: l(116.3,39.6),
    preview: <sec57.preview/>,
    article: <sec57.article />,
    timelineLabel:"国家统计局发布改革开放30年经济社会发展成就系列报告"
  },  {
    date: d(2008,12,15),
    location: l(116.2,39.6),
    preview: <sec58.preview/>,
    article: <sec58.article />,
    timelineLabel:"两岸“三通”迈开历史性步伐"
  },  {
    date: d(2010,4,14),
    location: l(96.8,33.4),
    preview: <sec59.preview/>,
    article: <sec59.article />,
    timelineLabel:"青海玉树发生里氏7.1级地震"
  },  {
    date: d(2010,5,1),
    location: l(121.4,31.2),
    preview: <sec60.preview/>,
    article: <sec60.article />,
    timelineLabel:"2010年上海世界博览会举行"
  },  {
    date: d(2010,12,1),
    location: l(116.2,39.5),
    preview: <sec61.preview/>,
    article: <sec61.article />,
    timelineLabel:""
  },  {
    date: d(2011,11,3),
    location: l(98.5,39.5),
    preview: <sec62.preview/>,
    article: <sec62.article />,
    timelineLabel:"神舟八号与天宫一号对接"
  },


] as Event[];
