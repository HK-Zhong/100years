import * as Antd from "antd";
import sec7 from "./sec7.png";
import styles from "../textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>蒋介石制造中山舰事件</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>蒋介石制造中山舰事件。他在广州实行紧急戒严，逮捕海军局代局长、共产党员李之龙，监视和软禁大批共产党人，解除省港罢工委员会的工人纠察队的武装，包围苏联领事馆，监视苏联顾问。当时在广东的国民革命军六个军中，有五个军的军长同蒋介石存在着矛盾。在蒋介石直接指挥的第一军中，政治骨干大部分都是共产党员。毛泽东等分析了当时的形势，主张以叶挺独立团为主，发动工农群众，联合国民党左派和一切可能联合的力量，给蒋介石以坚决回击。但共产国际代表主张退让。在妥协政策指导下，中共中央接受蒋介石的无理要求，共产党员被迫退出第一军。毛泽东、周恩来建议把这批共产党员派到其他军中去，建立叶挺独立团式的革命军队，中共中央没有接受这一主张。蒋介石通过中山舰事件，不仅打击了中国共产党，而且打击了汪精卫和国民党左派，大大加强了他在政治上、军事上的地位。他从这一次的试探中进一步摸清了共产党人存在的弱点，从而加紧他的反共活动。这一事件成为国共关系发展中的一个重要转折点。</p>
        <img className={styles.img} src={sec7} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
