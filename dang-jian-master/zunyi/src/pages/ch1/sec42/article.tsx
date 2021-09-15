import * as Antd from "antd";
import sec42 from "./sec42.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中央政治局会议在陕北清涧枣林沟召开，讨论中央机关行动问题</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      中央政治局会议在陕北清涧枣林沟召开，讨论中央机关行动问题。不久，中央机关分为三部分，由刘少奇、朱德等组成中央工作委员会，到华北进行中央委托的工作；毛泽东、周恩来、任弼时率中央和人民解放军总部的精干机关，继续留在陕北，指挥全国各战场作战；叶剑英、杨尚昆主持的中央后方委员会，转移到晋西北统筹后方工作。
      </p>
        {/*<img src={sec42} alt=""/>*/}
        <img className={styles.img} src={sec42} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
