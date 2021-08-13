import * as Antd from "antd";
import sec31 from "./sec31.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>嫦娥一号在西昌卫星发射中心发射升空</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>嫦娥一号是中国探月计划中的第一颗绕月人造卫星，以中国古代神话人物嫦娥命名。
        </p>
        <img className={styles.img} src={sec31} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
