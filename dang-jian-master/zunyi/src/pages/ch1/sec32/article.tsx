import * as Antd from "antd";
import sec32 from "./sec32.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>百团大战</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      百团大战，是抗日战争时期，八路军在华北敌后发动的一次大规模进攻和反“扫荡”的战役，由于参战兵力达105个团，故称“百团大战”。百团大战是抗日战争相持阶段八路军在华北地区发动的一次规模最大、持续时间最长的战役。
百团大战分为3个阶段。1940年8月20日至1940年9月10日为第一阶段，中心任务是摧毁正太路交通。1940年9月22日至1940年10月上旬为第二阶段，主要任务是继续破坏日军的交通线，并摧毁日军深入抗日根据地的主要据点。1940年10月上旬到1941年1月24日为第三阶段，主要任务是反击日军的报复性“扫荡”。
据八路军总部1940年12月10日的统计，百团大战仅前三个半月期间，进行大小战斗共1824次，重击了日伪军的反动气焰，有力地配合了国民党军正面战场的作战，极大地振奋了全国的抗战信心。
      </p>
        {/*<img src={sec32} alt=""/>*/}
        <img className={styles.img} src={sec32} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
