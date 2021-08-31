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
    date: d(2013, 4, 20),
    location: l(103, 30),
    preview: <sec5.preview />,
    article: <sec5.article />,
    timelineLabel:"四川雅安发生7.0级地震"
  },
  {
    date: d(2013, 6, 13),
    location: l(116, 39),
    preview: <sec6.preview />,
    article: <sec6.article />,
    timelineLabel:"习近平会见中国国民党荣誉主席吴伯雄"
  },
  {
    date: d(2014, 3, 15),
    location: l(116, 40),
    preview: <sec7.preview />,
    article: <sec7.article />,
    timelineLabel:"中央军委领导小组第一次全体会议"
  },
  {
    date: d(2014, 9, 30),
    location: l(116.04, 40),
    preview: <sec8.preview />,
    article: <sec8.article />,
    timelineLabel:"中国迎来首个“烈士纪念日”"
  },
  {
    date: d(2013, 10, 15),
    location: l(116, 39),
    preview: <sec9.preview />,
    article: <sec9.article />,
    timelineLabel:"习近平在京主持召开文艺工作座谈会"
  },
  {
    date: d(2013, 11, 19),
    location: l(120.5, 30.5),
    preview: <sec10.preview/>,
    article: <sec10.article />,
    timelineLabel:"首届世界互联网大会"
  },
  {
    date: d(2014,12,7),
    location: l(112,37),
    preview: <sec11.preview/>,
    article: <sec11.article />,
    timelineLabel:"中巴地球资源卫星04星发射成功"
  },
  {
    date: d(2014,12,13),
    location: l(118,31),
    preview: <sec12.preview/>,
    article: <sec12.article />,
    timelineLabel:"首个国家公祭日"
  },
  {
    date: d(2015,9,9),
    location: l(119,26),
    preview: <sec13.preview/>,
    article: <sec13.article />,
    timelineLabel:"国务院正式批复同意设立福州新区"
  },
  {
    date: d(2015,11,7),
    location: l(103,1),
    preview: <sec14.preview/>,
    article: <sec14.article />,
    timelineLabel:"习近平、马英九进行历史性会面"
  },
  {
    date: d(2015,12,17),
    location: l(98,39),
    preview: <sec15.preview/>,
    article: <sec15.article />,
    timelineLabel:"暗物质粒子探测卫星“悟空”发射任务圆满成功"
  },
  {
    date: d(2015,9,3),
    location: l(116.2,39.5),
    preview: <sec16.preview/>,
    article: <sec16.article />,
    timelineLabel:"中国人民抗日战争暨世界反法西斯战争胜利70周年大会"
  },
  {
    date: d(2016,12,14),
    location: l(116.2,39.5),
    preview: <sec17.preview/>,
    article: <sec17.article />,
    timelineLabel:"中央经济工作会议举行"
  },
  {
    date: d(2015,9,25),
    location: l(106.5,25.4),
    preview: <sec18.preview/>,
    article: <sec18.article />,
    timelineLabel:"全球最大单口径射电望远镜在贵州落成启用"
  },
  {
    date: d(2016,7,1),
    location: l(116.2,39.5),
    preview: <sec19.preview/>,
    article: <sec19.article />,
    timelineLabel:"庆祝中国共产党成立95周年大会在京举行"
  },
  {
    date: d(2017, 6, 26),
    location: l(116.09, 40),
    preview: <sec20.preview/>,
    article: <sec20.article />,
    timelineLabel:"中国高速动车组技术实现全面自主"
  },
  {
    date: d(2017, 7, 30),
    location: l(111, 43),
    preview: <sec21.preview/>,
    article: <sec21.article />,
    timelineLabel:"中国人民解放军建军90周年阅兵"
  },
  {
    date: d(2017, 10, 18),
    location: l(116, 40),
    preview: <sec22.preview/>,
    article: <sec22.article />,
    timelineLabel:"中国共产党第十九次全国代表大会"
  },
  {
    date: d(2018, 2, 26),
    location: l(116.10, 40),
    preview: <sec23.preview/>,
    article: <sec23.article />,
    timelineLabel:"中国共产党第十九届三中全会"
  },
  {
    date: d(2018, 4, 12),
    location: l(106, 13),
    preview: <sec24.preview/>,
    article: <sec24.article />,
    timelineLabel:"中央军委在南海海域举行海上阅兵"
  },
  {
    date: d(2018, 10, 23),
    location: l(114, 23),
    preview: <sec25.preview/>,
    article: <sec25.article />,
    timelineLabel:"港珠澳大桥开通仪式在广东珠海举行"
  },
  {
    date: d(2019, 4, 30),
    location: l(116, 40),
    preview: <sec26.preview/>,
    article: <sec26.article />,
    timelineLabel:"纪念五四运动100周年大会召开"
  },
  {
    date: d(2019, 10, 28),
    location: l(116.13, 40),
    preview: <sec27.preview/>,
    article: <sec27.article />,
    timelineLabel:"中共十九届四中全会召开"
  },
  {
    date: d(2019, 12, 17),
    location: l(109, 18),
    preview: <sec28.preview/>,
    article: <sec28.article />,
    timelineLabel:"中国第一艘国产航母山东舰交付海军"
  },
  {
    date: d(2020, 1, 7),
    location: l(116, 40),
    preview: <sec29.preview/>,
    article: <sec29.article />,
    timelineLabel:"习近平对做好不明原因肺炎疫情防控工作提出要求"
  },
  {
    date: d(2020,10 ,23 ),
    location: l(116.15, 40),
    preview: <sec30.preview/>,
    article: <sec30.article />,
    timelineLabel:"抗美援朝70周年大会召开"
  },
  {
    date: d(2021,2 , 25),
    location: l(116.15, 40),
    preview: <sec31.preview/>,
    article: <sec31.article />,
    timelineLabel:"全国脱贫攻坚总结表彰大会召开"
  },
  {
    date: d(2021, 6, 17),
    location: l(101, 40),
    preview: <sec32.preview/>,
    article: <sec32.article />,
    timelineLabel:"神舟十二号载人飞船发射升空"
  },


] as Event[];
