import * as Antd from "antd";
import sec26 from "./sec26.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>毛泽东发表《论持久战》</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>   毛泽东作《论持久战》的长篇讲演，指出：日本是帝国主义强国，中国是半殖民地半封建弱国；日本的侵略战争是退步的、野蛮的，中国的反侵略战争是进步的、正义的；日本是个小国，经不起长期战争，中国是个大国，能够支持长期战争；日本的非正义战争失道寡助，中国的正义战争得道多助。第一点决定了日本的进攻能在中国横行一时，中国不能速胜；后三点决定了中国不会亡国，经过长期抗战，最后胜利属于中国。《论持久战》系统阐明了党的抗日持久战战略总方针，是中国共产党领导抗日战争的纲领性文献。</p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec26} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
