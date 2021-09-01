import * as Antd from "antd";
import sec16 from "./sec16.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国和葡萄牙两国政府关于澳门问题的联合声明在北京草签</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>    3月26日，中国和葡萄牙两国政府关于澳门问题的联合声明在北京草签。联合声明宣布：中国政府将于１９９９年１２月２０日对澳门恢复行使主权。４月１３日，中葡两国总理分别代表各自政府正式签署了中葡关于澳门问题的联合声明。</p>
        {/*<img src={sec16} alt=""/>*/}
        <img className={styles.img} src={sec16} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
