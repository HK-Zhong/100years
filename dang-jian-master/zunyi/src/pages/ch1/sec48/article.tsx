import * as Antd from "antd";
import sec48 from "./sec48.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>连战宋楚瑜郁慕明先后访问大陆</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      ４月２９日　胡锦涛在北京与中国国民党主席连战举行正式会谈。会后共同发布“两岸和平发展共同愿景”。５月１２日，胡锦涛与亲民党主席宋楚瑜举行正式会谈。７月１２日，胡锦涛会见新党主席郁慕明率领的大陆访问团。
      </p>
        {/*<img src={sec48} alt=""/>*/}
        <img className={styles.img} src={sec48} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
