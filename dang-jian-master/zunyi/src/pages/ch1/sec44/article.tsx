import * as Antd from "antd";
import sec44 from "./sec44.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>全国土地会议召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      中央工作委员会于1947年7月17日至9月13日在河北省建屏县（今平山县）西柏坡村召开全国土地会议。
      </p>
        {/*<img src={sec44} alt=""/>*/}
        <img className={styles.img} src={sec44} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
