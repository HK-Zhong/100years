import * as Antd from "antd";
import sec11 from "./sec11.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>《论十大关系》报告</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>报告强调要调动国内外一切积极因素，为建设强大的社会主义国家而奋斗，并初步总结我国社会主义建设经验，提出探索适合中国情况的建设社会主义道路的任务。报告还提出共产党和民主党派“长期共存，互相监督”的方针。
          《论十大关系》的发表，标志着毛泽东对中国社会主义建设道路的探索开始形成一个初步的然而又是比较系统的思路。以后，毛泽东在总结新中国成立后的历史经验时，仍然把它看作是一个转折。《论十大关系》提出的一些新思想、新方针，为党的八大的召开作了重要准备。党的十一届三中全会后，这些指导思想和方针在新的历史条件下得到进一步的运用和发展。
        </p>
        {/*<img src={sec1} alt=""/>*/}
        <img className={styles.img} src={sec11} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
