import * as Antd from "antd";
import sec24 from "./sec24.png";
import styles from "../textarea.css";
// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>四届全国人大一次会议举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>四届人大重申了三届人大政府工作报告提出的“两步设想”：第一步，用15年时间，即在1990年以前，建成一个独立的比较完整的工业体系和国民经济体系；第二步，在20世纪内，全面实现农业、工业、国防和科学技术的现代化（四个现代化），使中国的国民经济走在世界的前列。
四届人大确定了以周恩来、邓小平为核心的国务院领导班子，邓小平在四届人大被任命为国务院第一副总理，一些有影响力的科学家和文艺名人被列入四届人大代表的名单上，最瞩目的是科学家钱学森和相声大师侯宝林，这两位是当时在周恩来总理的努力下列入名单的。四届人大象征着国家在文化大革命的后期，已有意把工作重点开始转移到经济建设上。
        </p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec24} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
