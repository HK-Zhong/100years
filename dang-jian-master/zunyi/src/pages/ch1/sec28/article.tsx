import * as Antd from "antd";
import sec28 from "./sec28.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国政府对日本右翼分子表示“严重关切”</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>   7月18日，外交部发言人指出：钓鱼岛是中国领土，中国政府对日本一些右翼分子在钓鱼岛群岛的某一岛上建立灯塔的事件表示“严重关切”。7月24日，外交部发言人在答记者问时说：钓鱼岛及其附近岛屿自古以来就是中国固有领土，中国主张通过友好协商解决中日两国在钓鱼岛归属问题上存在的争议。8月30日，《人民日报》发表评论员文章，重申钓鱼岛等岛屿自古以来就是中国的领土，和台湾一样，是中国领土不可分割的一部分；奉劝日本不要干蠢事。</p>
        {/*<img src={sec28} alt=""/>*/}
        <img className={styles.img} src={sec28} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
