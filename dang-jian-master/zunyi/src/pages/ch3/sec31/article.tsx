import * as Antd from "antd";
import sec31 from "./sec31.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>纪念五四运动100周年大会召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      习近平宣告，我国脱贫攻坚战取得了全面胜利，现行标准下9899万农村贫困人口全部脱贫，832个贫困县全部摘帽，12.8万个贫困村全部出列，区域性整体贫困得到解决，完成了消除绝对贫困的艰巨任务。习近平讲话指出，脱贫攻坚伟大斗争，锻造形成了上下同心、尽锐出战、精准务实、开拓创新、攻坚克难、不负人民的脱贫攻坚精神。我们走出了一条中国特色减贫道路，形成了中国特色反贫困理论。脱贫摘帽不是终点，而是新生活、新奋斗的起点。解决发展不平衡不充分问题、缩小城乡区域发展差距、实现人的全面发展和全体人民共同富裕仍然任重道远。要切实做好巩固拓展脱贫攻坚成果同乡村振兴有效衔接各项工作，让脱贫基础更加稳固、成效更可持续。
      </p>
        {/*<img src={sec31} alt=""/>*/}
        <img className={styles.img} src={sec31} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
