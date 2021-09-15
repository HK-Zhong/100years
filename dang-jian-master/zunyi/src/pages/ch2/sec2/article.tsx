import * as Antd from "antd";
import sec2 from "./sec2.png";
import styles from "../textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
  <Antd.Typography.Title>苏联政府决定同新中国建立外交关系</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>
          10月3日，周恩来复电表示，欢迎立即建立中华人民共和国与苏联之间的外交关系，并互派大使。
          10月3日，苏联即任命高级外交官尼古拉·瓦西里维奇·罗申为首任驻华特命全权大使。几乎是同时，国务院任命新华社常驻莫斯科记者戈宝权同志为中华人民共和国驻苏联大使馆参赞兼临时代办，即刻开始中国驻苏联大使馆的建馆工作。戈宝权荣幸地成为新中国首位驻外使节。在罗申大使到任前，苏联政府亦同时任命其原驻北平总领事馆总领事齐赫文斯基为苏联驻中华人民共和国大使馆参赞，齐赫文斯基也成为苏联政府任命驻新中国的首位外交官。
        </p>
        <img className={styles.img} src={sec2} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
