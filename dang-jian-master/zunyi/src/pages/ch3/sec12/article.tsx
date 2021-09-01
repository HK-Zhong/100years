import * as Antd from "antd";
import sec12 from "./sec12.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>沿海部分城市座谈会在北京召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>    3月26日－4月6日，中共中央书记处和国务院在北京召开沿海部分城市座谈会。根据邓小平的建议，会议确定：进一步开放由北至南14个沿海城市：大连、秦皇岛、天津、烟台、青岛、连云港、南通、上海、宁波、温州、福州、广州、湛江、北海，作为我国实行对外开放的一个新的重要步骤。５月４日，中共中央、国务院转发《沿海部分城市座谈会纪要》，并发出通知，指出：沿海开放城市的建设，主要靠政策，一是给前来投资和提供先进技术的外商以优惠待遇；二是扩大这些城市的自主权，让他们有充分的活力去开展对外经济活动。</p>
        {/*<img src={sec12} alt=""/>*/}
        <img className={styles.img} src={sec12} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
