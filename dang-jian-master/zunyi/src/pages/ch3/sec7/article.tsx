import * as Antd from "antd";
import sec7 from "./sec7.png";
import styles from "../textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>汕头经济特区批准成立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>   汕头位于广东省东部沿海潮汕平原上，是中国七大经济特区中，最早成立经济特区的4个城市之一，全国著名侨乡，华南重要港口城市，也是潮汕地区政治、经济的中心，为粤东和闽西南出海的门户。1981年，经国务院批准，在市区龙湖片区试办经济特区。</p>
        <img className={styles.img} src={sec7} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
