import * as Antd from "antd";
import sec34 from "./sec34.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国首艘航母“辽宁舰”交付使用</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>2012年9月25日，我国第一艘航母“辽宁舰”正式交付海军。我国自行设计研制的
          首型舰载多用途战斗机歼-15,顺利完成起降飞行训练。航母平台和飞机的技术性能
          得到了充分验证，舰机适配性能良好，达到了设计指标要求。
        </p>
        <img className={styles.img} src={sec34} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
