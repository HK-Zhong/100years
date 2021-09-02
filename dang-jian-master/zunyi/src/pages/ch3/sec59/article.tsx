import * as Antd from "antd";
import sec59 from "./sec59.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>青海玉树发生里氏7.1级地震</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      青海玉树发生里氏7．1级地震，造成2698人遇难，270人失踪。在中共中央、国务院、中央军委领导下，全党全军全国各族人民众志成城、团结奋战，夺取了抗震救灾斗争的重大胜利。灾后重建工作随之全面展开。
      </p>
        {/*<img src={sec59} alt=""/>*/}
        <img className={styles.img} src={sec59} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
