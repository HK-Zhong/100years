import * as Antd from "antd";
import sec35 from "./sec35.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共十八大召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>中国共产党第十八次全国代表大会于2012年11月8日在北京召开。党的十八大
          报告一开篇就明确指出，这次代表大会是在我国进入全面建成小康社会决定性阶
          段召开的一次十分重要的大会。这个判断，深刻揭示了党的十八大的重大意义。
          这次会议，明确了科学发展观是党必须长期坚持的指导思想，制定了坚持走中国
          特色社会主义政治发展道路和推进政治体制改革前进方向提出了全面建成小康社
          会目标，回答了坚定不移走中国特色社会主义道路政策立场。
        </p>
        <img className={styles.img} src={sec35} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
