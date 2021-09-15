import * as Antd from "antd";
import sec28 from "./sec28.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>广州、武汉相继沦陷，全民族抗日战争由战略防御转入战略相持阶段</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>  在战略防御阶段，八路军、新四军同日、伪军作战1600余次，毙伤俘敌5.4万余人，八路军发展到15.6万余人，新四军发展到2.5万人，抗日根据地（包括游击区）总人口达5000万以上。广州沦陷前后，周恩来通过潘汉年等把上海、南京等沦陷区的文化界人士和民主人士，包括宋庆龄、何香凝、郭沫若、茅盾、柳亚子、蔡元培等，转移到广州、香港。其中部分留在香港，加强了香港文化界的抗日救亡力量。</p>
        {/*<img src={sec28} alt=""/>*/}
        <img className={styles.img} src={sec28} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
