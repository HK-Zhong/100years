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
    date: d(1938,5,26),
    location: l(116, 40),
    preview: <sec26.preview/>,
    article: <sec26.article />,
    timelineLabel:"毛泽东发表《论持久战》"
  },
  {
    date: d(1938,9,29),
    location: l(118,35),
    preview: <sec27.preview/>,
    article: <sec27.article />,
    timelineLabel:"中共扩大的六届六中全会在延安召开"
  },
  {
    date: d(1938, 10, 1),
    location: l(116, 40),
    preview: <sec28.preview/>,
    article: <sec28.article />,
    timelineLabel:"抗日战争由战略防御转入战略相持阶段"
  },
  {
    date: d(1939, 1, 16),
    location: l(106,30),
    preview: <sec29.preview/>,
    article: <sec29.article />,
    timelineLabel:"中共中央南方局在重庆成立"
  },
  {
    date: d(1939,1,26),
    location: l(114, 22),
    preview: <sec30.preview/>,
    article: <sec30.article />,
    timelineLabel:"生产动员大会召开"
  },
  {
    date: d(1939,2,2),
    location: l(118.2, 35),
    preview: <sec31.preview/>,
    article: <sec31.article />,
    timelineLabel:"《新民主主义论》发表"
  },
  {
    date: d(1940,1,10),
    location: l(118.2,35.4),
    preview: <sec32.preview/>,
    article: <sec32.article />,
    timelineLabel:"中国战场成为世界反法西斯战争的东方主战场"
  },

  {
    date: d(1940,8,20),
    location: l(104,35),
    preview: <sec33.preview/>,
    article: <sec33.article />,
    timelineLabel:"百团大战"
  },
  {
    date: d(1941,11,17),
    location: l(120.4,32.38),
    preview: <sec34.preview/>,
    article: <sec34.article />,
    timelineLabel:"华中新四军八路军总指挥部在海安成立"
  },

  {
    date: d(1941,1,10),
    location: l(119.3,30.4),
    preview: <sec35.preview/>,
    article: <sec35.article />,
    timelineLabel:"皖南事变"
  },

  {
    date: d(1944,5,11),
    location: l(113.3,22.2),
    preview: <sec36.preview/>,
    article: <sec36.article />,
    timelineLabel:"河南地区抗日根据地建立"
  },
  {
    date: d(1944,5,21),
    location: l(118.2,35.6),
    preview: <sec37.preview/>,
    article: <sec37.article />,
    timelineLabel:"中共扩大的六届七中全会在延安召开"
  },
  {
    date: d(1945,4,23),
    location: l(118.2,35.6),
    preview: <sec38.preview/>,
    article: <sec38.article />,
    timelineLabel:"中国共产党第七次全国代表大会在延安举行"
  },
  {
    date: d(1945,8,28),
    location: l(106.5,29.4),
    preview: <sec39.preview/>,
    article: <sec39.article />,
    timelineLabel:"重庆谈判"
  },
  {
    date: d(1945,9,2),
    location: l(139,35.42),
    preview: <sec40.preview/>,
    article: <sec40.article />,
    timelineLabel:"日本代表在投降书上签字"
  },
  {
    date: d(1946,6,26),
    location: l(116.3,39.6),
    preview: <sec41.preview/>,
    article: <sec41.article />,
    timelineLabel:"全面内战爆发"
  },
  {
    date: d(1947,3,29),
    location: l(119.5,37.5),
    preview: <sec42.preview/>,
    article: <sec42.article />,
    timelineLabel:"中央政治局会议在陕北清涧枣林沟召开"
  },
  {
    date: d(1946,5,20),
    location: l(118.4,32,4),
    preview: <sec43.preview/>,
    article: <sec43.article />,
    timelineLabel:"学生运动爆发"
  },
  {
    date: d(1946,7,17),
    location: l(114,38.2),
    preview: <sec44.preview/>,
    article: <sec44.article />,
    timelineLabel:"全国土地会议召开"
  },
  {
    date: d(1948,9,12),
    location: l(116.2,39.6),
    preview: <sec45.preview/>,
    article: <sec45.article />,
    timelineLabel:"东北全境解放"
  },
  {
    date: d(1948,11,6),
    location: l(118.2,38.6),
    preview: <sec46.preview/>,
    article: <sec46.article />,
    timelineLabel:"淮海战役"
  },
  {
    date: d(1948,11,29),
    location: l(116.2,39.5),
    preview: <sec47.preview/>,
    article: <sec47.article />,
    timelineLabel:"平津战役"
  },
  {
    date: d(1949,3,5),
    location: l(116.2,38.5),
    preview: <sec48.preview/>,
    article: <sec48.article />,
    timelineLabel:"中共七届二中全会在西柏坡召开"
  },
  {
    date: d(1949,4,20),
    location: l(116.2,39.6),
    preview: <sec49.preview/>,
    article: <sec49.article />,
    timelineLabel:"渡江战役"
  },
  {
    date: d(1949,9,21),
    location: l(118.2,35.6),
    preview: <sec50.preview/>,
    article: <sec50.article />,
    timelineLabel:"中国人民政治协商会议第一届全体会议在北平举行"
  },

] as Event[];
