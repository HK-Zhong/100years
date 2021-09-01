import * as Antd from "antd";
import sec21 from "./sec21.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>秦山核电站并网发电</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
        该电站位于浙江省海盐县秦山北麓，于1985年3月开工，经过六年多的建设，1991年12月15日，秦山核电站30万千瓦压水堆核电机组并网发电，实现了中国大陆核电零的突破。我国也因此成为世界上第七个能够自主设计建造核电站的国家。秦山核电站满功率发电后，每年可向华东电网（包括上海、浙江、江苏、安徽三省一市）输送核电15亿千瓦时。
      </p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec21} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
