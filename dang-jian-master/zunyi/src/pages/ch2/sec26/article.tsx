import * as Antd from "antd";
import sec26 from "./sec26.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>毛泽东逝世</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>   18日，首都百万群众在天安门广场隆重举行追悼大会。全国各省、自治区、直辖市举行了悼念活动。</p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec26} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
