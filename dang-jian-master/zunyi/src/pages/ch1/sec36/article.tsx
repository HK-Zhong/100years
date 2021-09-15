import * as Antd from "antd";
import sec36 from "./sec36.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>河南地区抗日根据地建立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      在豫湘桂正面战场出现国民党军队大溃退的情况下，中共中央发出指示，要求在河南地区组织抗日游击队和人民武装，建立抗日根据地。7月至10月，八路军、新四军先后建立和扩大豫东、豫中、豫西等抗日根据地，恢复豫皖苏抗日根据地，加强华中与华北、陕北战略区的联系。
      </p>
        {/*<img src={sec36} alt=""/>*/}
        <img className={styles.img} src={sec36} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
