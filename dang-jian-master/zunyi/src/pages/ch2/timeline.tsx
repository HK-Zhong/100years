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


export default [
  {
    date: d(1949,10, 1),
    location: l(116, 40),
    preview: <sec1.preview />,
    article: <sec1.article />,
    timelineLabel: "中华人民共和国中央人民政府成立",
  },
  {
    date: d(1949,10, 2),
    location: l(116, 40),
    preview: <sec2.preview />,
    article: <sec2.article />,
    timelineLabel: "苏联政府决定同新中国建立外交关系"
  },
  {
    date: d(1950, 10,8),
    location: l(116, 40),
    preview: <sec3.preview />,
    article: <sec3.article />,
    timelineLabel: "中共中央作出抗美援朝、保家卫国的战略决策"
  },
  {
    date: d(1951,5,23),
    location: l(91, 30),
    preview: <sec4.preview />,
    article: <sec4.article />,
    timelineLabel:"西藏和平解放"
  },
  {
    date: d(1951, 8, 9),
    location: l(116, 40),
    preview: <sec5.preview />,
    article: <sec5.article />,
    timelineLabel:"《中华人民共和国民族区域自治实施纲要》公布施行"
  },
  {
    date: d(1953, 3, 1),
    location: l(116, 40),
    preview: <sec6.preview />,
    article: <sec6.article />,
    timelineLabel:"《中华人民共和国全国人民代表大会及地方各级人民代表大会选举法》公布施行"
  },
  {
    date: d(1953, 6, 28),
    location: l(77, 30),
    preview: <sec7.preview />,
    article: <sec7.article />,
    timelineLabel:"周恩来提出和平共处五项原则"
  },
  {
    date: d(1954, 9, 15),
    location: l(116, 40),
    preview: <sec8.preview />,
    article: <sec8.article />,
    timelineLabel:"一届全国人大一次会议举行"
  },
  {
    date: d(1955, 4, 18),
    location: l(107.5, 7),
    preview: <sec9.preview />,
    article: <sec9.article />,
    timelineLabel:"万隆会议"
  },
  {
    date: d(1956, 1, 14),
    location: l(116, 40),
    preview: <sec10.preview/>,
    article: <sec10.article />,
    timelineLabel:"中共中央召开关于知识分子问题的会议"
  },
  {
    date: d(1956,4,25),
    location: l(116,40),
    preview: <sec11.preview/>,
    article: <sec11.article />,
    timelineLabel:"《论十大关系》报告"
  },
  {
    date: d(1956,9,15),
    location: l(116,40),
    preview: <sec12.preview/>,
    article: <sec12.article />,
    timelineLabel:"中国共产党第八次全国代表大会举行"
  },
  {
    date: d(1957,4,27),
    location: l(116,40),
    preview: <sec13.preview/>,
    article: <sec13.article/>,
    timelineLabel:"中共中央发出《关于整风运动的指示》"
  },
  {
    date: d(1958,5,5),
    location: l(116,40),
    preview: <sec14.preview/>,
    article: <sec14.article />,
    timelineLabel:"中共八大二次会议召开"
  },
  {
    date: d(1958,11,2),
    location: l(114,34),
    preview: <sec15.preview/>,
    article: <sec15.article />,
    timelineLabel:"毛泽东在河南郑州召集中央工作会议"
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

] as Event[];
