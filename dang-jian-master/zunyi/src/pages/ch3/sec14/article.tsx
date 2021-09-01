import * as Antd from "antd";
import sec14 from "./sec14.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中英两国政府关于香港问题的联合声明</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>    9月26日，中英两国政府关于香港问题的联合声明在北京人民大会堂草签。联合声明宣布，中国政府决定在１９９７年７月１日对香港恢复行使主权，英国将在同日把香港交还给中国。中国政府宣布，中华人民共和国对香港恢复行使主权后，将设立香港特别行政区；保持香港原有的资本主义制度和生活方式，五十年不变。１２月１９日，这个联合声明由赵紫阳总理和撒切尔首相在北京正式签署。</p>
        {/*<img src={sec14} alt=""/>*/}
        <img className={styles.img} src={sec14} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
