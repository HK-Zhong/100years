import * as Antd from "antd";
import sec10 from "./sec10.png";
import styles from "../textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共中央召开关于知识分子问题的会议</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>周恩来代表中共中央作《关于知识分子问题的报告》，充分肯定知识分子在社会主义建设中的作用，宣布知识分子的绝大部分已经是工人阶级的一部分，提出制定科学技术发展远景规划的任务，向全国人民发出“向现代科学进军”的号召。毛泽东在会议最后一天讲话，号召全党努力学习科学知识，同党外知识分子团结一致，为迅速赶上世界科学先进水平而奋斗。</p>
        <img className={styles.img} src={sec10}alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
