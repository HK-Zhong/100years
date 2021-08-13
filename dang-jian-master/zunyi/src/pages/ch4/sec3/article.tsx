import * as Antd from "antd";
import sec3 from "./sec3.png";
import styles from "@/pages/ch1/textarea.css";

// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>神舟九号载人飞船成功发射</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>   2012年6月16日18时56分，执行我国首次载人交会对接任务的“神舟九号”载人飞船，在酒泉卫星发射中心发射升空后准确进入预定轨道，顺利将景海鹏、刘旺、刘洋三名航天员送上太空。此次飞行任务创造中国载人航天多项新纪录，航天员首次拜访太空小型空间实验室，女航天员首次写下太空传奇。“神舟九号”载人飞船的成功发射，标志着“天宫一号”与“神舟九号”载人交会对接任务实现良好开局、迈出重要一步。</p>
        <img className={styles.img} src={sec3}alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
