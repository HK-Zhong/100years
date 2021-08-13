import * as Antd from "antd";
import sec9 from "./sec9.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>习近平在京主持召开文艺工作座谈会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>  10月15日上午，习近平在京主持召开文艺工作座谈会并发表重要讲话。
          他强调，“文艺是时代前进的号角，最能代表一个时代的风貌，最能引领
          一个时代的风气。实现‘两个一百年’奋斗目标、实现中华民族伟大复兴
          的中国梦，文艺的作用不可替代，文艺工作者大有可为。”</p>
        <p>  习近平告诫，“文艺不能在市场经济大潮中迷失方向，不能在为什么人
          的问题上发生偏差，否则文艺就没有生命力。低俗不是通俗，欲望不代
          表希望，单纯感官娱乐不等于精神快乐。”“文艺工作者要想有成就，就
          必须自觉与人民同呼吸、共命运、心连心，欢乐着人民的欢乐，忧患着
          人民的忧患，做人民的孺子牛。”“应该用现实主义精神和浪漫主义情怀
          观照现实生活，用光明驱散黑暗，用美善战胜丑恶，让人们看到美好、看
          到希望、看到梦想就在前方。”“一部好的作品，应该是把社会效益放在首
          位，同时也应该是社会效益和经济效益相统一的作品。文艺不能当市场的
          奴隶，不要沾满了铜臭气。优秀的文艺作品，最好是既能在思想上、艺术上
          取得成功，又能在市场上受到欢迎。”习近平的讲话，澄清了思想文化战线
          上的理论是非，批判矛头直指低俗文化等精神污染，具有拨乱反正的重要作
          用。</p>
        <img className={styles.img} src={sec9} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
