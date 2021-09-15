import * as Antd from "antd";
import sec25 from "./sec25.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>平型关大捷</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>平型关大捷（又称平型关战斗、平型关伏击战），是指1937年9月25日，八路军在平型关为了配合第二战区的友军作战，阻挡日军攻势，由115师师长林彪、副师长聂荣臻指挥，充分发挥近战和山地战的特长，首次集中较大兵力对日军进行的一次成功伏击战，八路军在平型关取得首战大捷。
          该战是八路军115师师长林彪率领所部，根据中共中央军委的指示临危出征，与日本号称“钢军”的板垣征四郎第5师团第21旅团一部及辎重车队浴血死拼取得的首战胜利，有力配合了阎锡山负责的第二战区正面战场的防御作战，迟滞了日军的战略进攻，打乱了敌人沿平绥铁路右翼迂回华北的计划，是八路军出师以来打的第一个大胜仗。
        </p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec25} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
