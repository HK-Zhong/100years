import * as Antd from "antd";
import sec11 from "./sec11.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中巴地球资源卫星04星发射成功</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      2014年12月7日11时26分，我国在太原卫星发射中心用长征四号乙运载火箭，我国自主研制的长征四号乙运载火箭将中国和巴西联合研制的地球资源卫星04星发射升空，卫星顺利进入预定轨道。至此，长征系列运载火箭完成第200次发射，这标志着我国成为继美、俄之后世界上第三个独立完成双百次宇航发射的国家。
      </p>
        {/*<img src={sec1} alt=""/>*/}
        <img className={styles.img} src={sec11} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
