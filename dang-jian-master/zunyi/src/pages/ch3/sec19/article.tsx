import * as Antd from "antd";
import sec19 from "./sec19.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>上海证券交易所成立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>    11月26日，上海证券交易所正式成立。这是改革开放以来中国大陆开业的第一家证券交易所。开市当天，来自上海、山东、江西、安徽、浙江、海南、辽宁等地的25家证券经营机构成为交易所会员，分专业经纪商、专业自营商、监管经纪商和自营商几种。交易所采用现贷交易方式，不搞期货交易，开业初期以债券包括国债、企业债券和金融债券交易为主，同时进行股票交易，以后逐步过渡到债券和股票交易并重。</p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec19} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
