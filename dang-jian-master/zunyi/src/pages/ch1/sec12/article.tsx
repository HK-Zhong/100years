import * as Antd from "antd";
import sec12 from "./sec12.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>井冈山会师</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>毛泽东率领的秋收起义部队，和朱德、陈毅领导的湘南起义和南昌起义部分部队在井冈山（原宁冈县龙市镇）胜利会师，是中国人民解放军建军史上的重要历史事件。
          井冈山会师后根据中共湘南特委决定，两军合编为工农革命军第四军。壮大了井冈山的革命武装力量，对巩固扩大全国第一个农村革命根据地，推动全国革命事业的发展，具有深远的意义
        </p>
        {/*<img src={sec12} alt=""/>*/}
        <img className={styles.img} src={sec12} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
