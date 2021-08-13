import * as Antd from "antd";
import sec30 from "./sec30.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共十七大召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>2007年10月15日，中国共产党第十七次全国代表大会在北京人民大会堂隆重开幕。胡锦涛、江泽民、吴邦国、温家宝、贾庆林、曾庆红、吴官正、李长春、罗干等出席开幕会。
          中国共产党第十七次全国代表大会于2007年10月15日至21日在北京召开。大会主题是：高举中国特色社会主义伟大旗帜，以邓小平理论和“三个代表”重要思想为指导，深入贯彻落实科学发展观，继续解放思想，坚持改革开放，推动科学发展，促进社会和谐，为夺取全面建设小康社会新胜利而奋斗。胡锦涛代表第十六届中央委员会向大会作了题为《高举中国特色社会主义伟大旗帜，为夺取全面建设小康社会新胜利而奋斗》的报告。
        </p>
        <img className={styles.img} src={sec30} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
