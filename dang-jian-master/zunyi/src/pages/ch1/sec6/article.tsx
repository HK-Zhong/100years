import * as Antd from "antd";
import sec6 from "./sec6.png";
// @ts-ignore
import styles from "../textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>五卅惨案</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>上海学生及其他群众代表举行反帝游行、讲演，租界巡捕开枪镇压，酿成“五卅惨案”，死13人，伤数十人。当晚中共中央再一次召开紧急会议，决定组织行动委员会，建立各阶级的统一战线，发动工人罢工，学生罢课，商人罢市，抗议帝国主义者屠杀中国人民。</p>
        <img className={styles.img} src={sec6} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
