import * as Antd from "antd";
import sec2 from "./sec2.png";
import styles from "../textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
  <Antd.Typography.Title>对越自卫反击战</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>    1979年2月17日，中国人民解放军在广西、云南边境地区对越南发起自卫反击战。中国军队先后攻克越南谅山、高平、老街3个省会和17个县市，重创越军4个正规师零10个团，毙敌37300余人，俘敌2200余人，缴获大批武器装备和作战物资，摧毁了越南北部地区针对中国的军事设施。在完成预期目的之后，中国边防部队于3月16日全部撤回中国境内。1979年对越自卫还击战，中国达到了预期的作战目的，打乱了苏联一越南的战略部署，摧毁了越南北部的工矿业，对于保护中国国家主权和领土完整以及东南亚地区乃至世界的和平与稳定都有重要的意义。</p>
        <img className={styles.img} src={sec2} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
