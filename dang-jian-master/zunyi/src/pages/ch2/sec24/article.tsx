import * as Antd from "antd";
import sec24 from "./sec24.png";
import styles from "../textarea.css";
// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>《中共中央为公布国共合作宣言》发表</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>周恩来于1937年7月4日起草，中共中央7月15日正式交付国民党，9月22日国民党中央通讯社发表。2011年收入中央文献出版社出版的《建党以来重要文献选编》第十四册。《宣言》重申了中国共产党一贯坚持的三项奋斗的总目标和四项保证。
          三项奋斗的总目标是：一、争取中华民族之独立、自由与解放，准备与发动民族革命抗战；二、实现民权政治，召开国民大会，以制定宪法与规定救国方针；三、实现中国人民之幸福与愉快的生活。
          四项保证是：一、为孙中山倡导的三民主义彻底实现而奋斗；二、取消一切推翻国民党政权的暴动政策和赤化运动，停止以暴力没收地主土地的政策；三、取消现在的苏维埃政府，实行民权政治，以期全国政权统一；四、红军改编为国民革命军并待命出动。
          该《宣言》的公布鼓舞了全国民众，推动了国民党抗战，标志着抗日民族统一战线正式形成。
        </p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec24} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
