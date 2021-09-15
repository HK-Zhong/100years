import * as Antd from "antd";
import sec14 from "./sec14.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共八大二次会议召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>中共八大二次会议于1958年5月5日至23日在在北京举行。大会正式提出“鼓足干劲、力争上游、多快好省地建设社会主义”的总路线。</p>
        {/*<img src={sec14} alt=""/>*/}
        <img className={styles.img} src={sec14} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
