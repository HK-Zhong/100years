import * as Antd from "antd";
import sec6 from "./sec6.png";
// @ts-ignore
import styles from "../textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>《中华人民共和国全国人民代表大会及地方各级人民代表大会选举法》公布施行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>经过一年多的工作，全国进行基层选举的单位为21.4万余个，登记选民总数为3.23亿多人，选举出基层人民代表大会代表，并逐级召开地方各级人民代表大会。在此基础上，选举产生出席全国人民代表大会的代表。</p>
        <img className={styles.img} src={sec6} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
