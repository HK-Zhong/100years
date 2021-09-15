import * as Antd from "antd";
import sec13 from "./sec13.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共中央发出《关于整风运动的指示》</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>以正确处理人民内部矛盾为主题，以反对官僚主义、宗派主义和主观主义为主要内容的整风运动全面展开。在整风过程中，极少数右派分子乘机向党和新生的社会主义制度发动进攻。6月，运动的重点开始由党内整风转向反右派斗争。到1958年夏季，整风运动和反右派斗争完全结束。对右派分子的进攻进行反击是正确和必要的，但反右派斗争被严重扩大化。</p>
        {/*<img src={sec13} alt=""/>*/}
        <img className={styles.img} src={sec13} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
