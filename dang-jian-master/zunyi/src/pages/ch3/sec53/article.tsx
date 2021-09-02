import * as Antd from "antd";
import sec53 from "./sec53.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>嫦娥一号发射升空</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      我国在西昌卫星发射中心用长征三号甲运载火箭将嫦娥一号卫星成功送入太空，嫦娥一号是中国探月计划中的第一颗绕月人造卫星，以中国古代神话人物嫦娥命名，标志着我国月球探测工程迈出了重要的一步。
      </p>
        {/*<img src={sec53} alt=""/>*/}
        <img className={styles.img} src={sec53} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
