import * as Antd from "antd";
import sec8 from "./sec8.png";
import styles from "../textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>国民党发表为国民革命军出师北伐宣言</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>北伐战争的直接打击目标是受帝国主义支持的北洋军阀。在人民群众的大力支持下，北伐军势如破竹。到9月6日、7日，两湖战场的北伐军分别占领汉阳和汉口。10月10日攻克已被围困月余的武昌，全歼吴佩孚部主力。江西战场的北伐军也于11月初歼灭孙传芳部主力，占领九江、南昌。福建方面，12月中旬不战而下福州。北方冯玉祥部于9月17日在绥远五原誓师，挥军南下。到1926年底，国民革命军已控制了除江苏、浙江、安徽以外的南部各省。冯玉祥的国民军联军也已控制西北地区，准备东出潼关，响应北伐军。北伐战争胜利的大局已定。</p>
        <img className={styles.img} src={sec8} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
