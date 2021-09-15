import * as Antd from "antd";
import sec49 from "./sec49.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>渡江战役</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      经过协商，中共代表团于4月15日提出《国内和平协定》（最后修正案），并宣布4月20日为最后签字时间。国民党政府拒绝接受。解放军遂发起渡江战役，国民党政府“划江而治”的图谋破产。
渡江战役，也称京沪杭战役，历时42天，人民解放军以木帆船为主要航渡工具，一举突破国民党军的长江防线，并以运动战和城市攻坚战相结合，合围并歼灭其重兵集团。此役，人民解放军伤亡6万余人，歼灭国民党军11个军部、46个师共43万余人，解放了南京、上海、武汉等大城市，以及江苏、安徽两省全境和浙江省大部及江西、湖北、福建等省各一部分，为而后解放华东全境和向华南、西南地区进军创造了重要条件。
      </p>
        {/*<img src={sec49} alt=""/>*/}
        <img className={styles.img} src={sec49} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
