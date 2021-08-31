import * as Antd from "antd";
import sec24 from "./sec24.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中央军委在南海海域举行海上阅兵</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
        4月12日上午，中央军委在南海海域隆重举行海上阅兵，展示人民海军崭新面貌，激发强国强
        军坚定信念。中共中央总书记、国家主席、中央军委主席习近平检阅部队并发表重要讲话。他
        强调，在新时代的征程上，在实现中华民族伟大复兴的奋斗中，建设强大的人民海军的任务从
        来没有像今天这样紧迫。要深入贯彻新时代党的强军思想，坚持政治建军、改革强军、科技兴
        军、依法治军，坚定不移加快海军现代化进程，善于创新，勇于超越，努力把人民海军全面建
        成世界一流海军。</p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec24} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
