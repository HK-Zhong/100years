import * as Antd from "antd";
import sec17 from "./sec17.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共八届九中全会召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>八届九中全会于1961年1月14日至18日在北京召开。出席会议的有中央委员83人，候补中央委员87人，另有中央有关部门和省、市、自治区党委的负责同志23人列席了会议。会议着重讨论了1961年国民经济计划、贯彻1960年11月3日中共中央发出的《关于农村人民公社当前政策问题的紧急指示信》（即“十二条”）和农村整风整社等问题。全会听取了李富春作的《关于1960年国民经济计划执行情况和1961年国民经济计划主要指标的报告》。全会讨论并通过了李富春的报告。
全会通过对国民经济实行“调整、巩固、充实、提高”的方针，国民经济转入调整的轨道。毛泽东在全会及此前召开的中央工作会议上发表讲话，号召全党大兴调查研究之风。会后，中央领导同志相继到基层进行调查研究。到1965年底，国民经济调整任务全面完成。
</p>
        {/*<img src={sec17} alt=""/>*/}
        <img className={styles.img} src={sec17} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
