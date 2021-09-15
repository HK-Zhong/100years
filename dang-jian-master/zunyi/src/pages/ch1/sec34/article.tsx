import * as Antd from "antd";
import sec34 from "./sec34.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>皖南事变</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      新四军军部及所属皖南部队9000余人，在遵照国民党军事当局的命令向北转移途中遭到国民党军8万余人的伏击和围攻，大部壮烈牺牲或被俘，军长叶挺被扣押，副军长项英遇害，这就是皖南事变。事变发生后，蒋介石诬称新四军“叛变”，宣布取消其番号。中国共产党采取军事上严守自卫、政治上坚决反击的方针。中央军委于1月20日发布重建新四军军部的命令，陈毅任代军长，刘少奇任政治委员。到3月，国民党顽固派的第二次反共高潮被击退。
      </p>
        {/*<img src={sec34} alt=""/>*/}
        <img className={styles.img} src={sec34} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
