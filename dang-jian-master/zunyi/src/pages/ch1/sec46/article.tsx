import * as Antd from "antd";
import sec46 from "./sec46.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>淮海战役</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      淮海战役，国民党称“徐蚌会战”，是解放战争时期中国人民解放军中原野战军、中国人民解放军华东野战军在以徐州为中心，东起海州（连云港），西至商丘，北起临城（今枣庄市薛城），南达淮河的广大地区，对国民党军队进行的战略性进攻战役。
淮海战役于1948年11月6日开始，1949年1月10日结束，徐州剿匪总司令部刘峙指挥国民党军五个兵团、22个军、56个师及一个绥靖区共55.5万人被消灭及改编，解放军总共伤亡13.4万人。
淮海战役是三大战役中的第二个战役，也是解放军牺牲最重，歼敌数量最多，政治影响最大、战争样式最复杂的战役。
      </p>
        {/*<img src={sec46} alt=""/>*/}
        <img className={styles.img} src={sec46} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
