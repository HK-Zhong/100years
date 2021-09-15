import * as Antd from "antd";
import sec41 from "./sec41.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>全面内战爆发</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      1946年6月26日，国民党在完成战争准备后，不顾全国民众的强烈反对，撕毁停战协定和政协决议，以围攻鄂豫边宣化店为中心的中原解放区为起点，相继在晋南、苏皖边、鲁西南、胶济路及其两侧、冀东、绥东、察南、热河、辽南等地，向解放区展开大规模的进攻，全面内战爆发。国民党用于进攻解放区的兵力总计为193个旅（师）160万人，占其全部正规军86个整编师（军）248个旅（师）兵力的80%。蒋介石声称，只须3个月到6个月，他就可以取得胜利。面对全面内战爆发的严峻形势，7月20日，中共中央发出《以自卫战争粉碎蒋介石的进攻》的党内指示，指出：“只有在自卫战争中彻底粉碎蒋介石的进攻之后，中国人民才能恢复和平。”中共中央要求全党必须认识：我们不但必须打败蒋介石，而且能够打败蒋介石。9月16日，中共中央军委发出《集中优势兵力，各个歼灭敌人》的指示，要求人民解放军不惜放弃一些城市和地区，争取主动，集中兵力消灭敌军的有生力量。各解放区遵照此作战方针，有效打击敌人，大大削弱了国民党全面进攻的势头。
      </p>
        {/*<img src={sec41} alt=""/>*/}
        <img className={styles.img} src={sec41} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
