import * as Antd from "antd";
import sec9 from "./sec9.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>汕头经济特区建立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>汕头位于广东省东部沿海潮汕平原上，是中国七大经济特区之一，全国著名侨乡，
          华南重要港口城市，也是潮汕地区政治、经济的中心，为粤东和闽西南出海的门户。
          历来是粤东、闽西南、赣南地区的主要交通枢纽、也是粤东中心城市、广东省域副
          中心城市、进出口岸和商品集散地。</p>
        <img className={styles.img} src={sec9} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
