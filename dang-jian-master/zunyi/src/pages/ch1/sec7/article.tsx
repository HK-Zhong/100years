import * as Antd from "antd";
import sec7 from "./sec7.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>厦门经济特区建立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>厦门经济特区于1980年10月批准设立，面积2.5平方公里。1984年2月，邓小平同志
          视察厦门后，厦门特区范围扩大到全岛，面积131平方公里。</p>
        <img className={styles.img} src={sec7} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
