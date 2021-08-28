import * as Antd from "antd";
import sec15 from "./sec15.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>暗物质粒子探测卫星“悟空”发射任务圆满成功</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      12月17日8时12分，中国在酒泉卫星发射中心用长征二号丁运载火箭成功将暗物质粒子探测卫星“悟空”发射升空，卫星顺利进入预定转移轨道。此次发射任务圆满成功，标志着中国空间科学研究迈出重要一步。
      “悟空”暗物质粒子探测卫星是中国科学院空间科学战略性先导科技专项中首批立项研制的4颗科学实验卫星之一，是目前世界上观测能段范围最宽、能量分辨率最优的暗物质粒子探测卫星。在未来的几年中，“悟空”将在500公里的轨道高度上，探测神秘的暗物质存在的证据。
      </p>
        {/*<img src={sec15} alt=""/>*/}
        <img className={styles.img} src={sec15} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
