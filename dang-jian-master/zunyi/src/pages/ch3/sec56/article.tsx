import * as Antd from "antd";
import sec56 from "./sec56.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>神舟七号飞船发射</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      2008年9月25日21时10分，神舟七号飞船在酒泉卫星发射中心由新型长征二号F遥七火箭发射，翟志刚、刘伯明、景海鹏3名航天员搭乘神舟七号飞船进入太空，实现了航天员出舱活动和小卫星伴飞，成功完成了多项技术试验，开启了我国载人航天工程的新篇章。9月27日，航天员翟志刚圆满完成我国首次空间出舱任务。中国成为世界上第三个独立掌握空间出舱关键技术的国家。
      </p>
        {/*<img src={sec56} alt=""/>*/}
        <img className={styles.img} src={sec56} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
