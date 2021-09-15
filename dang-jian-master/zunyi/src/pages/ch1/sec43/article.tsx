import * as Antd from "antd";
import sec43 from "./sec43.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>学生运动爆发</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      南京、上海、苏州、杭州学生5000余名走上南京街头，举行“挽救教育危机联合大游行”，高呼“反饥饿”、“反内战”等口号，遭到反动当局镇压。同日，北平7000余名学生也举行了“反饥饿”、“反内战”示威大游行（五二〇运动）。学生运动的高涨促进了整个人民运动的高涨。1947年，全国20多个大中城市中先后有300余万工人罢工。在农村，广大农民反抗抓丁、征粮和征税。在共产党领导和推动下，以学生为先锋的爱国民主运动同国民党政府之间的斗争，逐步形成配合人民解放战争的第二条战线。
      </p>
        {/*<img src={sec43} alt=""/>*/}
        <img className={styles.img} src={sec43} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
