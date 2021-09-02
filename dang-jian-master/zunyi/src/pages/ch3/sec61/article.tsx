import * as Antd from "antd";
import sec61 from "./sec61.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国成为世界第二大经济体</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      2010年，日本内阁府发布的数据显示，日本当年名义GDP为54742亿美元，比中国少4044亿美元，中国GDP超过日本正式成为第二大经济体。
自1978年改革开放后，经过三十多年的壮观增长，中国终于超过日本，成为仅次于美国的世界第二大经济体。
      </p>
        {/*<img src={sec61} alt=""/>*/}
        <img className={styles.img} src={sec61} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
