import * as Antd from "antd";
import sec21 from "./sec21.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>西安事变</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
        1936年12月12日，为挽救民族危亡、劝谏蒋介石改变“攘外必先安内”的既定国策、停止内战一致抗日，张学良、杨虎城毅然在临潼对蒋介石实行“兵谏”，扣留来陕督战的蒋介石，发动了震惊中外的“西安事变”，亦称双十二事变。提出抗日救国八项政治主张，逼蒋介石抗日。1936年12月25日，在中共中央和周恩来等人的努力下，蒋介石接受“停止内战、联共抗日”等六项主张，为“西安事变”的和平解决奠定了基础。
      </p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec21} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
