import * as Antd from "antd";
import sec35 from "./sec35.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>我国第一艘载人航天试验飞船发射升空</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      1999年11月20日6时30分，我国第一艘载人航天试验飞船在酒泉卫星发射中心航天发射场发射升空。在完成预定的空间科学实验后，于21日凌晨3时41分在内蒙古中部地区成功着陆。这是我国载人航天工程的第一次飞行试验，标志我国载人航天技术有了新的重大突破。江泽民为飞船题名“神舟”。中共中央、国务院、中央军委致电热烈祝贺。
        ９月2８日，中共中央、国务院在北京人民大会堂隆重举行全国抗洪抢险总结表彰大会。江泽民发表重要讲话强调，在同洪水搏斗中，我们的民族和人民展现出了一种十分崇高的精神。这就是万众一心、众志成城，不怕困难、顽强拼搏，坚韧不拔、敢于胜利的伟大抗洪精神。抗洪精神同我们党一贯倡导的革命精神和新时期的创业精神一样，都是我国人民的宝贵精神财富。我们世世代代都要继承和弘扬这些精神，激励我们的广大干部和群众不断从胜利走向新的胜利。
      </p>
        {/*<img src={sec35} alt=""/>*/}
        <img className={styles.img} src={sec35} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
