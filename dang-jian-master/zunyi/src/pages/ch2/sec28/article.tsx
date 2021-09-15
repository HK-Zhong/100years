import * as Antd from "antd";
import sec28 from "./sec28.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共十一届三中全会召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>   全会批判了“两个凡是”的错误方针，充分肯定必须完整地、准确地掌握毛泽东思想的科学体系，高度评价关于实践是检验真理的唯一标准问题的讨论；果断地停止使用“以阶级斗争为纲”的口号，作出把党和国家工作中心转移到经济建设上来、实行改革开放的历史性决策；决定健全党的民主集中制，加强党的领导机构，成立中央纪律检查委员会，选举陈云为中央纪委第一书记。全会标志着中国共产党重新确立了马克思主义的思想路线、政治路线和组织路线，实现新中国成立以来党的历史上具有深远意义的伟大转折，开启了改革开放和社会主义现代化的伟大征程。</p>
        {/*<img src={sec28} alt=""/>*/}
        <img className={styles.img} src={sec28} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
