import * as Antd from "antd";
import sec18 from "./sec18.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共中央召开扩大的中央工作会议</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>   扩大的中央工作会议于1962年1月11日至2月7日在北京举行。参加会议的有中央各部门、各中央局、各省市自治区党委以及地委、县委、重要工矿企业和部队的负责干部，共7000多人，故称七千人大会。这次大会的主要目的，是总结经验，统一认识，加强党内的民主集中制，以便进一步纠正“大跃进”以来工作中的错误，切实贯彻调整国民经济的方针。大会由毛泽东主持，刘少奇代表中共中央作了书面报告和讲话，周恩来、邓小平作了重要讲话，林彪也在会上讲了话。</p>
        {/*<img src={sec18} alt=""/>*/}
        <img className={styles.img} src={sec18} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
