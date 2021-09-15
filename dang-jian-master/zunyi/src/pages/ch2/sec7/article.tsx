import * as Antd from "antd";
import sec7 from "./sec7.png";
import styles from "../textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>周恩来提出和平共处五项原则</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>1953年12月31日周恩来总理在接见印度政府代表团时，首次完整地提出了和平共处五项原则，即：互相尊重领土主权（在亚非会议上改为互相尊重主权和领土完整）、互不侵犯、互不干涉内政、平等互惠（在中印、中缅联合声明中改为平等互利）和和平共处，得到了印方的赞同，并写入了1954年4月29日签订的《关于中国西藏地方和印度之间的通商和交通协定》。</p>
        <img className={styles.img} src={sec7} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
