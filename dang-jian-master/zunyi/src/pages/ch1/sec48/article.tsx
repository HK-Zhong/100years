import * as Antd from "antd";
import sec48 from "./sec48.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共七届二中全会在西柏坡召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      中国共产党第七届中央委员会第二次全体会议（中国共产党七届二中全会、中共七届二中全会）于1949年3月5日—13日在河北省平山县西柏坡举行，出席这次全会的有中央委员34人，中央候补委员19人；列席会议的11人，由毛泽东、刘少奇、周恩来、朱德、任弼时组成的主席团主持了此次会议。七届二中全会是解放战争时期中共召开的唯一的一次中央全会，会议作出的各项政策规定，不仅对迎接中国革命在全国的胜利，而且对新中国的建设事业，都具有重要指导作用。
      </p>
        {/*<img src={sec48} alt=""/>*/}
        <img className={styles.img} src={sec48} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
