import * as Antd from "antd";
import sec21 from "./sec21.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国第一颗人造地球卫星发射成功</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      1970年4月24日，我国自行设计、制造的第一颗人造地球卫星“东方红”一号，由“长征”一号运载火箭一次发射成功。
这标志着我国成为继苏联、美国、法国和日本之后世界上第五个能独立自主研制并发射人造地球卫星的国家，这是我国航天事业发展的第一个里程碑。“从此，中国正式进入太空时代。”
 “东方红”一号卫星运行轨道距地球最近点439千米，最远点2384千米，轨道平面和地球赤道平面的夹角68.5度，绕地球一周114分钟。卫星重173千克，用20.009兆赫频率，播送《东方红》乐曲。
时至今日，“东方红”一号虽早已停止工作，但仍在围绕地球飞行。
作为纪念，自2016年起，我国将每年4月24日设立为“中国航天日”。
东方红一号”的发射成功，使中国成为继苏联、美国、法国和日本之后第五个用自制火箭发射国产卫星的国家，从此开启了一片属于自己的天空。
      </p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec21} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
