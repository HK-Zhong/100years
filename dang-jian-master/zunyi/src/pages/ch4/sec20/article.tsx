import * as Antd from "antd";
import sec20 from "./sec20.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国高速动车组技术实现全面自主</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
        “复兴号”大量采用中国国家标准、行业标准、中国铁路总公司企业标准等技术标准，
        同时采用了一批国际标准和国外先进标准，具有良好的兼容性能，在254项重要标准
        中，中国标准占84%。最重要的是中国标准动车组整体设计以及车体、转向架、牵引、
        制动、网络等关键技术都是我国自主研发，具有完全自主知识产权。
        2017年6月26日11时05分，“复兴号”G123次和G124次高速列车在京沪高铁两端的
        北京南站和上海虹桥站双向首发。它们共同迎来了一个时代：中国标准动车组时代。
        2017年7月27日，中国铁路总公司安排“复兴号”在京沪高铁开展时速350公里体验
        运营，通过全面系统的科学论证和综合评估，一致认为，京沪高铁满足按设计速度
        350公里/小时运营要求。从9月21日起，铁路部门安排7对“复兴号”动车组在京沪
        高铁按时速350公里运行，分别担当G1/G2、G3/G4、G5/G6、G7/G8、G9/G10、
        G13/G14、G17/G18次，京沪之间全程运行时间在4个半小时左右，对于客流需求
        旺盛的京沪高铁来说，提速有利于缓解“一票难求”的局面。京沪高铁的提速，向世
        界充分彰显我国我国高铁科技创新的领先地位。
      </p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec20} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
