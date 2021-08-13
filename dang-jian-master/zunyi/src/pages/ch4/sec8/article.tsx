import * as Antd from "antd";
import sec8 from "./sec8.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国迎来首个“烈士纪念日”</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>   2014年8月31日，十二届全国人大常委会第十次会议通过的《全国人民代表大会
          常务委员会关于设立烈士纪念日的决定》规定，将9月30日设立为烈士纪念日。每年9
          月30日国家举行纪念烈士活动。习近平、李克强、张德江、俞正声、刘云山、王岐山、
          张高丽等在首个“烈士纪念日”之际，同首都各界代表一起出席向人民英雄敬献花篮仪式。</p>
        <img className={styles.img} src={sec8} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
