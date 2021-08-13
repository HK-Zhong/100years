import * as Antd from "antd";
import sec32 from "./sec32.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>成功举办2008年北京奥运会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>“同一个世界，同一个梦想”的口号体现了奥林匹克精神实质和普遍价值观——团结、
          友谊、进步、和谐、参与和梦想，表达了全世界在奥林匹克精神的感召下，追求人类
          美好未来共同愿望。
        </p>
        <img className={styles.img} src={sec32} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
