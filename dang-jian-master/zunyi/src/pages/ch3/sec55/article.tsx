import * as Antd from "antd";
import sec55 from "./sec55.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>北京成功举办奥运会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      北京成功举办第二十九届奥运会、第十三届残奥会。中国政府坚持贯彻绿色奥运、科技奥运、人文奥运理念，发挥举国体制作用，依靠广大人民群众，坚持开展国际交流合作，为北京奥运会、残奥会的成功举办提供了坚强保障。共有２０４个国家和地区的代表团１万多名运动员参加本届奥运会。中国体育代表团在奥运会上获得５１枚金牌、２１枚银牌、２８枚铜牌，位居金牌榜第一位；在残奥会上获得８９枚金牌、７０枚银牌、５２枚铜牌，位居金牌榜和奖牌榜第一位。
      </p>
        {/*<img src={sec55} alt=""/>*/}
        <img className={styles.img} src={sec55} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
