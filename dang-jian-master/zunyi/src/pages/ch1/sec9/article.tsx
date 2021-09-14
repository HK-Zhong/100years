import * as Antd from "antd";
import sec9 from "./sec9.png";
import styles from "../textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>南昌起义</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>根据中共中央的决定，在周恩来为书记的中共前敌委员会和贺龙、叶挺、朱德、刘伯承等领导下，党所掌握和影响的国民革命军等武装两万余人，在南昌举行武装起义，占领了南昌。这次起义打响了武装反抗国民党反动派的第一枪，标志着中国共产党独立地领导革命战争、创建人民军队和武装夺取政权的开始。８月３日开始，前委按照中共中央的原定计划率领部队陆续撤离南昌。由于缺乏经验，没有与江西、湖南、湖北等省的农民运动结合，起义部队在南下途中，于９月底１０月初在广东潮汕地区遭到优势敌军的围攻而失败，保存下来的武装，一部分转移到海陆丰地区，继续坚持斗争；另一部分在朱德、陈毅率领下转移到粤赣湘边界地区打游击。</p>
        <img className={styles.img} src={sec9} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
