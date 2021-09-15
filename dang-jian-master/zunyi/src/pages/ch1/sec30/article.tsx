import * as Antd from "antd";
import sec30 from "./sec30.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>生产动员大会召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>   为克服经济上的严重困难，中共中央在延安召开生产动员大会，毛泽东发出“自己动手”的号召。抗日根据地军民相继掀起大生产运动。1941年春，八路军第三五九旅开进南泥湾实行军垦屯田，成为全军大生产运动的一面旗帜。包括发展生产在内，各抗日根据地相继实行对敌斗争、精兵简政、统一领导、拥政爱民、整顿三风、审查干部、时事教育、“三三制”、减租减息十大政策，对克服困难、渡过难关、巩固抗日根据地起了重要作用。党在延安时期培育形成了以坚定正确的政治方向、解放思想实事求是的思想路线、全心全意为人民服务的根本宗旨、自力更生艰苦奋斗的创业精神为主要内容的延安精神，是我们党的宝贵精神财富。</p>
        {/*<img src={sec30} alt=""/>*/}
        <img className={styles.img} src={sec30} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
