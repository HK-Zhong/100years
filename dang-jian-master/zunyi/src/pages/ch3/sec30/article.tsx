import * as Antd from "antd";
import sec30 from "./sec30.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>香港回归</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>   ６月３０日午夜－７月１日凌晨　中英两国政府香港政权交接的仪式在香港隆重举行。中华人民共和国主席江泽民庄严宣告：中国对香港恢复行使主权；中华人民共和国香港特别行政区正式成立。１时３０分，中华人民共和国香港特别行政区成立暨特区政府宣誓就职仪式在香港会议展览中心新翼七楼隆重举行。中国人民解放军驻港部队于7月1日零时开始履行湘钢防务职责。</p>
        {/*<img src={sec30} alt=""/>*/}
        <img className={styles.img} src={sec30} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
