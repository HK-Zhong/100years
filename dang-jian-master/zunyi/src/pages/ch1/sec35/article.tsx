import * as Antd from "antd";
import sec35 from "./sec35.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国战场成为世界反法西斯战争的东方主战场</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      随着苏德战争爆发，日本侵略者决意加紧对华作战，中国战场成为世界反法西斯战争的东方主战场。日军对各抗日根据地特别是华北抗日根据地发动毁灭性的“扫荡”和“蚕食”，敌后抗日根据地进入空前困难时期。晋察冀、晋冀豫、冀鲁豫、山东和苏北、苏中、苏南等根据地军民创造了地道战、地雷战、麻雀战、破袭战、围困战、水上游击战等多种武装斗争形式，充分发挥人民战争的威力，有效打击了敌人。在艰苦的敌后抗战中，广大军民中涌现出无数可歌可泣的英雄事迹。东北抗联第一路军总司令兼政治委员杨靖宇、东北抗联第二路军副总指挥赵尚志、八路军副参谋长左权、新四军第四师师长彭雪枫等在作战中牺牲。八路军战士马宝玉、胡德林、胡福才、宋学义、葛振林，在打完最后一粒子弹后跳下悬崖，被称为“狼牙山五壮士”。新四军“刘老庄连”在与敌人战斗中全部壮烈牺牲。
      </p>
        {/*<img src={sec35} alt=""/>*/}
        <img className={styles.img} src={sec35} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
