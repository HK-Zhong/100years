import * as Antd from "antd";
import sec34 from "./sec34.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>庆祝建国50周年大会举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      首都各界庆祝中华人民共和国成立五十周年大会在天安门广场举行。国家主席、中央军委主席江泽民同志检阅了人民解放军陆海空三军和人民武装警察部队、民兵预备役部队组成的42个地面方队。改革开放后诞生的陆军航空兵、海军陆战队、武警特警、预备役等部队第一次出现在受阅部队中。在武器装备方面，此次受阅的42种装备，90%以上都是新装备，绝大部分都是中国自行设计和生产的。五十万军民参加了盛大的阅兵式和群众游行。
      </p>
        {/*<img src={sec34} alt=""/>*/}
        <img className={styles.img} src={sec34} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
