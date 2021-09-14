import * as Antd from "antd";
import sec20 from "./sec20.png";
import styles from "../textarea.css";
// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>西渡黄河准备执行宁夏战役计划</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>10月下旬，为打通苏联援助的道路，红四方面军一部奉中革军委命令，西渡黄河准备执行宁夏战役计划。11月11日，渡河部队根据中央决定称西路军。深入河西走廊的西路军将士以不畏艰险、浴血奋战的英雄主义气概，在极端困难的条件下坚持战斗四个月，终因寡不敌众，于1937年3月惨烈失败。</p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec20} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
