import * as Antd from "antd";
import sec13 from "./sec13.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>海南经济特区建立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>海南经济特区，是中国七个（海南、深圳、厦门、珠海、汕头、喀什、霍尔果斯）
          经济特区中面积最大的经济特区和唯一的省级经济特区。海南经济特区的范围为海
          南本岛。
          2018年10月16日，《中国（海南）自由贸易试验区总体方案》正式对外发布，海
          南经济特区三十而立之年，再担改革开放新使命。
        </p>
        <img className={styles.img}  src={sec13} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
