import * as Antd from "antd";
import sec36 from "./sec36.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>澳门回归</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      １２月２０日，中葡两国政府澳门政权交接仪式隆重举行。江泽民主席郑重宣告中国政府对澳门恢复行使主权，中华人民共和国澳门特别行政区成立。澳门行政区政府宣誓就职。中共中央、全国人大、国务院、全国政协、中央军委在京举行“首都各界庆祝澳门回归祖国大会”。
      </p>
        {/*<img src={sec36} alt=""/>*/}
        <img className={styles.img} src={sec36} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
