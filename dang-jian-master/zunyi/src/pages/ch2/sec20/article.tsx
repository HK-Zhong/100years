import * as Antd from "antd";
import sec20 from "./sec20.png";
import styles from "../textarea.css";
// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国共产党第九次全国代表大会举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>中国共产党第九次全国代表大会于1969年4月1日至24日在北京举行。出席这次大会的代表共1512名，代表全党2200万党员。在九大代表的产生过程中，由于党组织瘫痪，根本无法进行正常的选举，大都是由革命委员会同各造反派组织的头头协商决定或上级组织指定的。这使林彪、江青等人得以乘机把他们帮派体系的许多人封为大会代表，有的是在确定为九大的代表以后，才赶办入党手续的，造成组织上的严重不纯。九大在思想上、政治上和组织上的指导方针都是错误的。</p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec20} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
