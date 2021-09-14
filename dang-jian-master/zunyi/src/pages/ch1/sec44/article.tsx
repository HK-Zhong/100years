import * as Antd from "antd";
import sec44 from "./sec44.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国正式成为WTO成员</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      2001年11月10日，卡塔尔多哈喜来登酒店萨尔瓦会议大厅座无虚席。世界贸易组织（WTO）第四届部长级会议审议并通过关于中国加入世界贸易组织的决定。2001年12月11日，中国正式加入WTO。历时15年的艰辛谈判，2001年，中国正式成为WTO成员。
      </p>
        {/*<img src={sec44} alt=""/>*/}
        <img className={styles.img} src={sec44} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
