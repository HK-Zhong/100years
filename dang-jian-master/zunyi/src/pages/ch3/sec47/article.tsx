import * as Antd from "antd";
import sec47 from "./sec47.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>非典事件</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      SARS于2002年在中国广东发生，并扩散至东南亚乃至全球，2003年疫情传染流行，直至2003年中期疫情才被逐渐消灭。2003年４月１４日正在广东考察工作的中共中央总书记、国家主席胡锦涛１４日上午来到广东省疾病预防控制中心考察，并同医务工作者座谈，深入了解防治非典型肺炎的情况。胡锦涛指出，要从全面贯彻“三个代表”重要思想的高度，始终把人民群众的安危冷暖放在心上。当前要把防治非典型肺炎的工作，作为关系改革发展稳定大局、关系人民群众身体健康和生命安全的一件大事，切实抓紧抓好。5月16日，人事部、卫生部、解放军总政治部作出决定，追授在抗击非典斗争中以身殉职的医务工作者邓练贤、叶欣、梁世奎、陈洪光、李晓红“白求恩奖章”。
      </p>
        {/*<img src={sec47} alt=""/>*/}
        <img className={styles.img} src={sec47} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
