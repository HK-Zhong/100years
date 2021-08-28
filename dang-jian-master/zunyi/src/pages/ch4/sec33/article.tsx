import * as Antd from "antd";
import sec33 from "./sec33.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国共产党历史展览馆开馆</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      习近平参观“‘不忘初心、牢记使命’中国共产党历史展览”，并带领党员领导同志重温入党誓词。强调，党的历史是最生动、最有说服力的教科书。我们党的一百年，是矢志践行初心使命的一百年，是筚路蓝缕奠基立业的一百年，是创造辉煌开辟未来的一百年。回望过往的奋斗路，眺望前方的奋进路，必须把党的历史学习好、总结好，把党的宝贵经验传承好、发扬好，铭记奋斗历程，担当历史使命，从党的奋斗历史中汲取前进力量。要教育引导广大党员、干部通过参观学习，更加自觉地不忘初心、牢记使命，增强“四个意识”，坚定“四个自信”，始终在思想上政治上行动上同党中央保持高度一致，坚定理想信念，学好用好党的创新理论，赓续红色血脉，发扬光荣传统，发挥先锋模范作用，团结带领全国各族人民，更好立足新发展阶段、贯彻新发展理念、构建新发展格局，全面做好改革发展稳定各项工作，汇聚起全面建设社会主义现代化国家、实现中华民族伟大复兴中国梦的磅礴力量。
      </p>
        {/*<img src={sec33} alt=""/>*/}
        <img className={styles.img} src={sec33} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
