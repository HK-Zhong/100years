import * as Antd from "antd";
import sec26 from "./sec26.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>纪念五四运动100周年大会召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
        纪念五四运动100周年大会30日上午在北京人民大会堂隆重举行。中共中央总书记、国家
        主席、中央军委主席习近平在会上发表重要讲话强调，五四运动以来的100年，是中国青
        年一代又一代接续奋斗、凯歌前行的100年，是中国青年用青春之我创造青春之中国、青
        春之民族的100年。新时代中国青年运动的主题，新时代中国青年运动的方向，新时代中
        国青年的使命，就是坚持中国共产党领导，同人民一道，为实现“两个一百年”奋斗目标、
        实现中华民族伟大复兴的中国梦而奋斗。
        在热烈的掌声中，习近平发表重要讲话。他表示，今年是五四运动100周年，也是中华人
        民共和国成立70周年。在这个具有特殊意义的历史时刻，我们在这里隆重集会，缅怀五四
        先驱崇高的爱国情怀和革命精神，总结党和人民探索实现民族复兴道路的宝贵经验，这对
        发扬五四精神，激励全党全国各族人民特别是新时代中国青年为全面建成小康社会、加快
        建设社会主义现代化国家、实现中华民族伟大复兴的中国梦而奋斗，具有十分重大的意义。
      </p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec26} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
