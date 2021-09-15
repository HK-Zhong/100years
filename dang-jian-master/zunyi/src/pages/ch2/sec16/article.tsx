import * as Antd from "antd";
import sec16 from "./sec16.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中央政治局扩大会议在江西庐山召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>  原定议题是总结“大跃进”以来的经验教训，继续纠正“左”的错误，但会议后期错误地发动了对彭德怀等人的批判。8月2日至16日，中共八届八中全会在庐山召开。会后，在全党错误地开展了“反右倾”斗争。</p>
        {/*<img src={sec16} alt=""/>*/}
        <img className={styles.img} src={sec16} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
