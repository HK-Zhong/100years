import * as Antd from "antd";
import sec28 from "./sec28.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国第一艘国产航空母舰山东舰交付海军，习近平出席交接入列仪式并登舰视察</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      山东舰建造是一个巨系统工程，建造总量超过20艘超大型油轮工程量总和。3000多个舱室，上万个零部件，上万台套各种设备遍布全船，许多特种装置属首次研制和安装，施工难度巨大。
山东舰是举全国之力、聚全国之智的巨大系统工程，参研、参建、参试单位多达532家。从开工到交付，历时6年，突破了船体结构、动力核心设备这两项制约我国航母事业发展的重大技术瓶颈。航空母舰的成功建造彰显了我国的工业实力，承载着国人几十年的梦想终成现实。
      </p>
        {/*<img src={sec28} alt=""/>*/}
        <img className={styles.img} src={sec28} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
