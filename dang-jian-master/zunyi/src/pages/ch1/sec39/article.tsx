import * as Antd from "antd";
import sec39 from "./sec39.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>重庆谈判</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      重庆谈判，是抗日战争胜利之际，中国共产党和中国国民党两党就中国未来的发展前途、建设大计在重庆进行的一次历史性会谈。从1945年8月29日至10月10日，经过43天谈判，国共双方达成《政府与中共代表会谈纪要》，即“双十协定”。
重庆谈判及达成的“双十协定”给中国人民带来了和平、民主、团结的希望和曙光。虽然国民党统治集团违背全国人民迫切要求休养生息、和平建国的意愿，在1946年6月底全面撕毁“双十协定”，但其历史意义和启示仍是非常重大的。
      </p>
        {/*<img src={sec39} alt=""/>*/}
        <img className={styles.img} src={sec39} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
