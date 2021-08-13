import * as Antd from "antd";
import sec4 from "./sec4.png";
import styles from "@/pages/ch1/textarea.css";

// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>邓小平提出“小康”的概念</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>他指出，我们要实现的四个现代化，是中国式的四个现代化，不是像你们那样的
          现代化概念，而是“小康之家”，即到本世纪末，达到第三世界中比较富裕一点的
          国家的水平，实现国民生产总值人均一千美元。　</p>
        <img className={styles.img} src={sec4}alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
