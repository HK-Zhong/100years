import * as Antd from "antd";
import sec13 from "./sec13.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>城市经济体制改革座谈会在常州市召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>    4月16日-25日，国家体改委在常州市召开城市经济体制改革座谈会。会议认为，沙市、常州、重庆等市的实践表明，搞好城市综合改革试点，对于推动整个经济体制改革具有重要意义。根据改革形势的需要，会议提出：加快城市经济体制改革试点的步伐；简政放权，搞活企业；开放市场，搞活流通；探索城市新的计划管理体制，完善市领导县的新体制，增加一批改革试点城市等项措施和建议。</p>
        {/*<img src={sec13} alt=""/>*/}
        <img className={styles.img} src={sec13} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
