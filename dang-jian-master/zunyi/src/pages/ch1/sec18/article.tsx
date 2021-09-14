import * as Antd from "antd";
import sec18 from "./sec18.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共中央在瓦窑堡开始举行政治局会议</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>   中共中央在瓦窑堡开始举行政治局会议。参加会议的有毛泽东、张闻天、周恩来、博古、刘少奇、邓发、张浩（林育英）等人。23日，会议通过《中央关于军事战略问题的决议》。决议确定“把国内战争同民族战争结合起来”，“准备直接对日作战的力量”和“扩大红军”的方针；同时，提出了抗日游击战争在战略上的重大作用。２５日，会议通过了《中央关于目前政治形势与党的任务决议》，确定了抗日民族统一战线的策略方针。会后，毛泽东于２７日在党的活动分子会上又作了《论反对日本帝国主义的策略》的报告，系统地阐明了党的抗日民族统一战线的策略方针。决议和报告指出了在新的形势下，不仅工人、农民、城市小资产阶级和广大知识分子是坚决抗日的基本力量，而且充分说明了民族资产阶级也有与之建立抗日民族统一战线的可能性。即使是地主买办营垒，也可能发生分化。党的基本策略是“组织千千万万的民众，调动浩浩荡荡的革命军”，建立起广泛的抗日民族统一战线。因此，必须反对“左”倾关门主义，同时要坚持无产阶级在统一战线中的领导权。</p>
        {/*<img src={sec18} alt=""/>*/}
        <img className={styles.img} src={sec18} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
