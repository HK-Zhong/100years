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


export default [
  {
    date: d(1921,7, 23),
    location: l(121.5, 31),
    preview: <sec1.preview />,
    article: <sec1.article />,
    timelineLabel: "中国共产党第一次全国代表大会在上海举行",
  },
  {
    date: d(1922,7, 16),
    location: l(121.5, 31),
    preview: <sec2.preview />,
    article: <sec2.article />,
    timelineLabel: "中国共产党第二次全国代表大会在上海举行"
  },
  {
    date: d(1923, 6,12),
    location: l(113.5, 23),
    preview: <sec3.preview />,
    article: <sec3.article />,
    timelineLabel: "中国共产党第三次全国代表大会在广州召开"
  },
  {
    date: d(1924,1,20),
    location: l(113.5, 23),
    preview: <sec4.preview />,
    article: <sec4.article />,
    timelineLabel:"中国国民党在广州举行第一次全国代表大会"
  },
  {
    date: d(1925, 1, 11),
    location: l(121.5, 31),
    preview: <sec5.preview />,
    article: <sec5.article />,
    timelineLabel:"中国共产党第四次全国代表大会在上海举行"
  },
  {
    date: d(1925, 5, 30),
    location: l(121.5, 31),
    preview: <sec6.preview />,
    article: <sec6.article />,
    timelineLabel:"五卅惨案"
  },
  {
    date: d(1926, 3, 20),
    location: l(113.5, 23),
    preview: <sec7.preview />,
    article: <sec7.article />,
    timelineLabel:"蒋介石制造中山舰事件"
  },
  {
    date: d(1926, 7, 4),
    location: l(113.5, 23),
    preview: <sec8.preview />,
    article: <sec8.article />,
    timelineLabel:"国民党发表为国民革命军出师北伐宣言"
  },
  {
    date: d(1927, 8, 1),
    location: l(116, 29),
    preview: <sec9.preview />,
    article: <sec9.article />,
    timelineLabel:"南昌起义"
  },
  {
    date: d(1927, 8, 7),
    location: l(114.5, 30.5),
    preview: <sec10.preview/>,
    article: <sec10.article />,
    timelineLabel:"中共中央在湖北汉口召开紧急会议"
  },
  {
    date: d(1927,9,9),
    location: l(114,26.5),
    preview: <sec11.preview/>,
    article: <sec11.article />,
    timelineLabel:"毛泽东和湖南省委领导湘赣边界秋收起义"
  },
  {
    date: d(1928,4,28),
    location: l(114,26.5),
    preview: <sec12.preview/>,
    article: <sec12.article />,
    timelineLabel:"井冈山会师"
  },
  {
    date: d(1929,12,25),
    location: l(117,25),
    preview: <sec13.preview/>,
    article: <sec13.article/>,
    timelineLabel:"中国共产党红军第四军第九次代表大会（古田会议）"
  },
  {
    date: d(1930,1,5),
    location: l(116,25),
    preview: <sec14.preview/>,
    article: <sec14.article />,
    timelineLabel:"毛泽东撰写《星星之火，可以燎原》"
  },
  {
    date: d(1931,9,18),
    location: l(123.5,42),
    preview: <sec15.preview/>,
    article: <sec15.article />,
    timelineLabel:"日本帝国主义侵占沈阳"
  },
  {
    date: d(1934,10,10),
    location: l(116.2,26),
    preview: <sec16.preview/>,
    article: <sec16.article />,
    timelineLabel:"第五次反“围剿”失败，中央主力红军被迫长征"
  },
  {
    date: d(1935,1,15),
    location: l(107,28),
    preview: <sec17.preview/>,
    article: <sec17.article />,
    timelineLabel:"中共中央政治局在遵义召开扩大会议"
  },
  {
    date: d(1935,12,17),
    location: l(110,37),
    preview: <sec18.preview/>,
    article: <sec18.article />,
    timelineLabel:"中共中央在瓦窑堡开始举行政治局会议"
  },
  {
    date: d(1936,10,9),
    location: l(105,36),
    preview: <sec19.preview/>,
    article: <sec19.article />,
    timelineLabel:"红一、红四方面军在甘肃会宁会师"
  },
  {
    date: d(1936, 10, 25),
    location: l(106.5, 35),
    preview: <sec20.preview/>,
    article: <sec20.article />,
    timelineLabel:"西渡黄河准备执行宁夏战役计划"
  },
  {
    date: d(1936, 12, 12),
    location: l(108, 34),
    preview: <sec21.preview/>,
    article: <sec21.article />,
    timelineLabel:"西安事变"
  },
  {
    date: d(1937, 7, 7),
    location: l(114, 40),
    preview: <sec22.preview/>,
    article: <sec22.article />,
    timelineLabel:"卢沟桥事变"
  },
  {
    date: d(1937, 8, 22),
    location: l(109, 36),
    preview: <sec23.preview/>,
    article: <sec23.article />,
    timelineLabel:"洛川会议"
  },
  {
    date: d(1937, 9, 22),
    location: l(116, 40),
    preview: <sec24.preview/>,
    article: <sec24.article />,
    timelineLabel:"《中共中央为公布国共合作宣言》发表"
  },
  {
    date: d(1937, 9, 25),
    location: l(114, 40),
    preview: <sec25.preview/>,
    article: <sec25.article />,
    timelineLabel:"平型关大捷"
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

] as Event[];
