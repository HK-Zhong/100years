import * as Antd from "antd";
import sec38 from "./sec38.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>江泽民提出“三个代表”的重要思想</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      江泽民在广东考察工作期间提出了“三个代表”的重要思想。他强调，要把中国的事情办好，关键取决于我们的党，取决于党的思想、作风、组织、纪律状况和战斗力、领导水平。只要我们党始终成为中国先进社会生产力的发展要求、中国先进文化的前进方向、中国最广大人民的根本利益的忠实代表，我们党就能永远立于不败之地，永远得到全国各族人民的衷心拥护并带领人民不断前进。５月８日－１５日，他在江苏、浙江、上海考察工作时进一步阐述了“三个代表”的有关重要思想。指出：“三个代表”，是我们党的立党之本，执政之基，力量之源；推进党的思想建设、政治建设、组织建设和作风建设，都应贯彻“三个代表”的要求。
      </p>
        {/*<img src={sec38} alt=""/>*/}
        <img className={styles.img} src={sec38} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
