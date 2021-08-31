import * as Antd from "antd";
import sec7 from "./sec7.png";
import styles from "../textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中央军委领导小组第一次全体会议</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>   中央军委深化国防和军队改革领导小组第一次全体会议于2014年3月15日在北京召开。
          中共中央总书记、国家主席、中央军委主席、中央军委深化国防和军队改革领导小组组长习
          近平主持会议并发表重要讲话，中央军委副主席、中央军委深化国防和军队改革领导小组副
          组长范长龙，中央军委副主席、中央军委深化国防和军队改革领导小组常务副组长许其亮，
          中央军委深化国防和军队改革领导小组成员出席会议。习近平强调，深化国防和军队改革，
          要把思想和行动统一到党中央和中央军委的决策部署上来，坚持用强军目标审视改革、以强
          军目标引领改革、围绕强军目标推进改革，确保深化国防和军队改革工作起好步、开好局。
          会议宣布了中央军委深化国防和军队改革领导小组人员组成和机构设置，审议通过了有关工
          作规则和改革重要举措分工方案，研究了近期工作。</p>
        <img className={styles.img} src={sec7} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
