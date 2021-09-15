import * as Antd from "antd";
import sec25 from "./sec25.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>唐山大地震</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>河北唐山、丰南地区发生里氏7.8级强烈地震，并波及天津、北京等地，24.2万多人罹难，16.4万多人重伤。在中共中央、国务院和中央军委领导下，在全国人民和解放军的大力支援下，灾区群众奋力抗震救灾。
        </p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec25} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
