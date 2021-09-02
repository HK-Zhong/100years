import * as Antd from "antd";
import sec37 from "./sec37.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>西部地区开发会议在京举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      由国务院西部地区开发领导小组组织召开的西部地区开发会议在京举行。党中央、国务院有关部门和各省、自治区、直辖市以及新疆生产建设兵团的负责人参加了会议。国务院总理朱镕基在会上阐述了实施西部大开发战略，加快中西部地区发展的重大意义。强调要站在我国现代化建设全局和战略高度，把思想和行动统一到党中央这一重大决策上来。会议认为，实施西部大开发是一项规模宏大的系统工程，也是一项艰巨的历史任务。当前和今后一个时期，要集中力量抓好几件关系西部地区开发全局的重点工作：第一，加快基础设施建设；第二，切实加强生态环境保护和建设；第三，积极调整产业结构；第四，发展科技和教育，加快人才培养；第五，加大改革开放力度。中西部地区各省市自制区和各地区立即行动起来，成立开发工作领导小组，研究和策划大开发战略的政策方案，组织调研、论证，召开国内国际和地区等各类开发研讨会、情况介绍会、招商会等等。全国各地也纷纷响应党中央的号召，开展各种形式的活动，支援西部大开发战略。5月18日，国家计委在中外记者招待会上公布，2000年将在西部地区新开工十大工程，这十大工程是西部大开发的序幕工程。
      </p>
        {/*<img src={sec37} alt=""/>*/}
        <img className={styles.img} src={sec37} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
