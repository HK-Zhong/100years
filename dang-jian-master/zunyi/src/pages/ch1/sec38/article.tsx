import * as Antd from "antd";
import sec38 from "./sec38.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国共产党第七次全国代表大会在延安举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      出席大会的正式代表547人，候补代表208人，代表全国121万党员。毛泽东致开幕词，向大会提交《论联合政府》政治报告并作口头报告，朱德作《论解放区战场》军事报告，刘少奇作《关于修改党章的报告》，周恩来作《论统一战线》发言。大会提出党的政治路线，把党在长期奋斗中形成的优良作风概括为三大作风。七大是党在新民主主义革命时期召开的一次极其重要的全国代表大会，以“团结的大会，胜利的大会”载入党的史册。大会选举产生新的中央委员会。大会把毛泽东思想确立为全党的指导思想并载入党章。
      </p>
        {/*<img src={sec38} alt=""/>*/}
        <img className={styles.img} src={sec38} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
