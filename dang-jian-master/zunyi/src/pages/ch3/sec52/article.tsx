import * as Antd from "antd";
import sec52 from "./sec52.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国共产党第十七次全国代表大会开幕</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      中国共产党第十七次全国代表大会于2007年10月15日至21日在北京召开。大会主题是：高举中国特色社会主义伟大旗帜，以邓小平理论和“三个代表”重要思想为指导，深入贯彻落实科学发展观，继续解放思想，坚持改革开放，推动科学发展，促进社会和谐，为夺取全面建设小康社会新胜利而奋斗。胡锦涛代表第十六届中央委员会向大会作了题为《高举中国特色社会主义伟大旗帜，为夺取全面建设小康社会新胜利而奋斗》的报告。
      </p>
        {/*<img src={sec52} alt=""/>*/}
        <img className={styles.img} src={sec52} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
