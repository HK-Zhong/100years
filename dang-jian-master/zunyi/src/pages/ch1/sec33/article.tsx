import * as Antd from "antd";
import sec33_1 from "./sec33_1.png";
import sec33_2 from "./sec33_2.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>成为世界第二大经济体</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>2010年，日本内阁府发布的数据显示，日本当年名义GDP为54742亿美元，
          比中国少4044亿美元，中国GDP超过日本正式成为第二大经济体。
          自1978年改革开放后，经过三十多年的壮观增长，中国终于超过日本，成为
          仅次于美国的世界第二大经济体。
          根据中国有关部门统计数据，我国GDP从1978年的0.3645万亿元增长到2018
          年的90万亿元，占世界经济比重15%左右，对世界经济增长贡献率超过30%。
        </p>
        <img className={styles.img} src={sec33_1} alt=""/>
        <img className={styles.img} src={sec33_2} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
