import * as Antd from "antd";
import sec29 from "./sec29.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共中央南方局在重庆成立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>   中共中央南方局在重庆成立，周恩来为书记（1943年6月改由董必武主持工作），负责领导南方国民党统治区和部分沦陷区及海外党组织，以及在此范围内设立的八路军、新四军办事处，《新华日报》、《群众》周刊社等公开机构。南方局坚持贯彻抗战、团结、进步的方针，广泛开展统战等各方面工作。</p>
        {/*<img src={sec29} alt=""/>*/}
        <img className={styles.img} src={sec29} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
