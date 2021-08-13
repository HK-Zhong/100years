import * as Antd from "antd";
import sec28 from "./sec28.png";
import styles from "@/pages/ch1/textarea.css";

// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>连战宋楚瑜郁慕明先后访问大陆</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>2005年4月—7月，应中共中央总书记胡锦涛邀请，中国国民党主席连战、亲民党主席
          宋楚瑜、新党主席郁慕明相继成功访问大陆，对促进两岸关系和平发展达成多项共识。
        </p>
        <img className={styles.img} src={sec28}alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
