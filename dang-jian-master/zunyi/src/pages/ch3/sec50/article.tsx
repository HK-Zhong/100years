import * as Antd from "antd";
import sec50 from "./sec50.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>青藏铁路全线建成通车</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      7月1日 青藏铁路全线建成通车。铁路全长1956公里，最高点海拔5072米，是世界上海拔最高、线路最长的高原铁路。胡锦涛出席庆祝大会并发表讲话，号召全党全国各族人民学习和弘扬挑战极限、勇创一流的青藏铁路精神。
      </p>
        {/*<img src={sec50} alt=""/>*/}
        <img className={styles.img} src={sec50} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
