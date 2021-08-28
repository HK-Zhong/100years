import * as Antd from "antd";
import sec32 from "./sec32.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>神舟十二号载人飞船发射升空</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      这是我国载人航天工程立项实施以来的第19次飞行任务，也是空间站阶段的首次载人飞行任务。飞船入轨后，将按照预定程序，与天和核心舱进行自主快速交会对接。组合体飞行期间，航天员将进驻天和核心舱，完成为期3个月的在轨驻留，开展机械臂操作、出舱活动等工作，验证航天员长期在轨驻留、再生生保等一系列关键技术。
      </p>
        {/*<img src={sec32} alt=""/>*/}
        <img className={styles.img} src={sec32} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
