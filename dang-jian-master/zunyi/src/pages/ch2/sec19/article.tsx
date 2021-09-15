import * as Antd from "antd";
import sec19 from "./sec19.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国第一颗氢弹空爆试验成功</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p> 在我国西部地区成功地爆炸了第一颗氢弹。这次试验是中国继第一颗原子弹爆炸成功后，在核武器发展方面的又一次飞跃，标志着中国核武器的发展进入了一个新阶段。
在氢弹爆炸成功的同时，中国政府重申：“中国进行必要而有限制的核试验，发展核武器，完全是为了防御，其最终目的就是为了消灭核武器”。“在任何时候，任何情况下，中国都不会首先使用核武器。”</p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec19} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
