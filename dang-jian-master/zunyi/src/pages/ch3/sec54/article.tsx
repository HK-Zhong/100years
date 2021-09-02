import * as Antd from "antd";
import sec54 from "./sec54.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>四川汶川发生里氏８级特大地震</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      四川汶川发生里氏８级特大地震，造成６９２２７人遇难，１７９２３人失踪，受灾群众１５１０万人。在中共中央、国务院、中央军委的领导下，我国迅速组织了历史上救援速度最快、动员范围最广、投入力量最大的抗震救灾活动，夺取了抗震救灾斗争的重大胜利。
      </p>
        {/*<img src={sec54} alt=""/>*/}
        <img className={styles.img} src={sec54} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
