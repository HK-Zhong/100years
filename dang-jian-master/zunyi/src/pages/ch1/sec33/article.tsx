import * as Antd from "antd";
import sec33 from "./sec33.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>华中新四军八路军总指挥部在海安成立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      华中新四军八路军总指挥部在苏中海安成立，叶挺任总指挥，刘少奇任政治委员，陈毅任副总指挥（在叶挺抵达前代理总指挥）。到年底，新四军在两年多的敌后游击战中，共对日、伪军作战2700多次，毙伤俘敌5.5万人，在华中建立了皖东、豫皖苏、皖东北、苏北等抗日根据地，扩大了苏南、皖中抗日根据地，沟通了华北与华中抗日根据地的联系，主力部队发展到近9万人，地方武装和不脱产的地方武装数十万人。
      </p>
        {/*<img src={sec33} alt=""/>*/}
        <img className={styles.img} src={sec33} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
