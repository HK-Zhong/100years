import * as Antd from "antd";
import sec24 from "./sec24.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共十六大召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>中国共产党第十六次全国代表大会在北京召开。全会通过了关于《中国共产党章程
          (修正案)》的决议，把“三个代表”重要思想同马克思列宁主义、毛泽东思想、邓小
          平理论一道确立为党必须长期坚持的指导思想。这次党章修改工作，突出了“三个代
          表”重要思想对新形势下党的工作和党的建设的指导作用，坚持了与时俱进和改革创
          新的精神，在保持党章整体框架不变的前提下，对一些内容作了适当修改或补充完善。
        </p>
        <img className={styles.img} src={sec24}alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
