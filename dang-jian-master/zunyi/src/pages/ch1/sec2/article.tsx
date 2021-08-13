import * as Antd from "antd";
import sec2 from "./sec2.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
  <Antd.Typography.Title>对越自卫反击战</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>1979年2月17日，中国人民解放军在广西、云南边境地区
          对越南发起自卫反击战。中国军队先后攻克越南谅山、高平
          、老街3个省会和17个县市，重创越军4个正规师零10个团
          ，毙敌37300余人，俘敌2200余人，缴获大批武器装备和
          作战物资，摧毁了越南北部地区针对中国的军事设施。在完
          成预期目的之后，中国边防部队于3月16日全部撤回中国境内。</p>
        <p>20世纪80年代，两国继续军事对抗，在罗家坪大山、法卡
          山、扣林山、老山、者阴山等地区又相继爆发了边界冲突，
          时间持续达十年。20世纪90年初，两国关系逐步恢复正常，
          陆地边界也最终划定。</p>
        <img className={styles.img} src={sec2}alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
