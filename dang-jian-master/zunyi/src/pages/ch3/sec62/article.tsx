import * as Antd from "antd";
import sec62 from "./sec62.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>神舟八号与天宫一号成功交会对接</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      11月1日  我国自行研制的神舟八号飞船，在酒泉卫星发射中心发射升空，583秒后成功进入预定轨道。11月3日1时36分，神舟八号与此前发射的天宫一号成功交会对接。中国成为继美、俄之后世界上第三个完全独立掌握太空交会对接技术的国家。作为中国载人航天“三步走”战略目标第二步中的关键环节，突破和掌握空间交会对接技术，为开展更大规模的载人航天活动奠定了基础。
        
      </p>
        {/*<img src={sec62} alt=""/>*/}
        <img className={styles.img} src={sec62} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
