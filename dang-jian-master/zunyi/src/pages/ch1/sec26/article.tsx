import * as Antd from "antd";
import sec26 from "./sec26.png";
import sec26_1 from "./sec26_1.png";
// @ts-ignore
import vid from "./vid.mp4";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国首次载人航天飞船飞行成功</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>2003年10月15日9时整，中国自主研制的“神州”五号载人飞船在中国酒泉卫星发射
          中国心中国“长征”二号F型运载火箭发射升空。9时9分50秒，飞船准确进入预定轨道
          ，将中国第一名宇航员杨利伟成功送上太空。首次载人航天飞行的圆满成功，是中国
          航天发展史上一座新的里程碑，标志着中国已经成为世界上独立自主地完整掌握载人
          航天技术的国家之一。
        </p>
        <img className={styles.img} src={sec26} alt=""/>
        {/*<img src={sec26_1} alt=""/>*/}
        {/*<video src={vid} style={{width:"600px",height:"400px"}}/>*/}
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
