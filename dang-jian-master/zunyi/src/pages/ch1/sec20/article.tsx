import * as Antd from "antd";
import sec20 from "./sec20.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共十五届五中全会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>全会审议并通过了《中共中央关于制定国民经济和社会发展第十个五年计划的建议》。
          全会高度评价了改革开放二十多年特别是“九五”计划以来我国经济建设和社会发展所取
          得的巨大成就；深入分析了世纪之交我国改革开放和现代化建设面临的国际和国内形势，
          认为从新世纪开始，我国将进入全面建设小康社会，加快推进现代化的新的发展阶段。
          全会按照十五大对新世纪我国现代化建设的总体展望和部署，提出了“十五”期间我国现
          代化建设的总体部署。
        </p>
        <img className={styles.img}  src={sec20}alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
