import * as Antd from "antd";
import sec41 from "./sec41.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>北京申办2008年奥运会成功</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      当北京申办2008年奥运成功的消息传来，聚集在中华世纪坛和自发来到天门广场的各界群众爆发出排山倒海般的欢呼。党和国家领导人江泽民、李鹏、朱镕基、李瑞环、胡锦涛、尉健行等当晚在北京中华世纪坛和天安门广场与各界群众共庆申奥成功。江泽民在现场给远在莫斯科的李岚清打电话，热烈祝贺北京申奥成功。
        ９月２８日，中共中央、国务院在北京人民大会堂隆重举行全国抗洪抢险总结表彰大会。江泽民发表重要讲话强调，在同洪水搏斗中，我们的民族和人民展现出了一种十分崇高的精神。这就是万众一心、众志成城，不怕困难、顽强拼搏，坚韧不拔、敢于胜利的伟大抗洪精神。抗洪精神同我们党一贯倡导的革命精神和新时期的创业精神一样，都是我国人民的宝贵精神财富。我们世世代代都要继承和弘扬这些精神，激励我们的广大干部和群众不断从胜利走向新的胜利。
      </p>
        {/*<img src={sec41} alt=""/>*/}
        <img className={styles.img} src={sec41} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
