import * as Antd from "antd";
import sec29 from "./sec29.png";
import sec29_1 from "./sec29_1.png";
// @ts-ignore
import vid from "./vid.mp4";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>青藏铁路顺利通车</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>青藏铁路于2006年7月1日全线通车，中国人民终于实现了在“世界屋脊”通火车的世纪梦想。
        </p>
        {/*<img src={sec29} alt=""/>*/}
        {/*<img src={sec29_1}  alt=""/>*/}
        <video className={styles.img} src={vid} style={{width:"600px",height:"400px"}} controls/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
