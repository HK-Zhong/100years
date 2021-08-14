import * as Antd from "antd";
import sec19 from "./sec19.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>庆祝中国共产党成立95周年大会在京举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      7月1日庆祝中国共产党成立95周年大会举行。。中共中央总书记、国家主席、中央军委主席习近平在会上发表重要讲话，回顾中国共产党95年来团结带领全国各族人民不懈奋斗走过的光辉历程和作出的伟大历史贡献，阐明近代以来我国社会发展的规律性认识，阐明中国共产党的执政理念、执政方略和对重大国内外问题的原则立场，强调我们党已经走过了95年的历程，但我们要永远保持建党时中国共产党人的奋斗精神，永远保持对人民的赤子之心。一切向前走，都不能忘记走过的路；走得再远、走到再光辉的未来，也不能忘记走过的过去，不能忘记为什么出发。面向未来，面对挑战，全党同志一定要不忘初心、继续前进，并提出8个方面的要求。李克强主持，张德江，俞正声，王岐山，张高丽出席，刘云山宣读《中共中央关于表彰全国优秀共产党员、优秀党务工作者和先进基层党组织的决定》。
      </p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec19} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
