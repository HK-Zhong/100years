import * as Antd from "antd";
import sec58 from "./sec58.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>两岸“三通”迈开历史性步伐</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      １２月１５日，海峡两岸分别在北京、天津、上海、福州、深圳以及台北、高雄、基隆等城市同时举行海上直航、空中直航以及直接通邮的启动和庆祝仪式。两岸“三通”迈开历史性步伐。
      </p>
        {/*<img src={sec58} alt=""/>*/}
        <img className={styles.img} src={sec58} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
