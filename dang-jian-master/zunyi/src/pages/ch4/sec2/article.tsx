import * as Antd from "antd";
import sec2 from "./sec2.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
  <Antd.Typography.Title>习近平总书记首提“中国梦”</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>   2012年11月29日，习近平在参观《复兴之路》展览时首次提出并阐述实现中华民族伟大复兴的中国梦，指出：“实现中华民族伟大复兴，就是中华民族近代以来最伟大的梦想。这个梦想，凝聚了几代中国人的夙愿，体现了中华民族和中国人民的整体利益，是每一个中华儿女的共同期盼。”中国梦的提出，贯通了中华民族的昨天、今天和明天，传递出新一届中央领导集体勇担民族复兴使命的坚定决心和信心。</p>
        <p>   中国梦把国家的追求、民族的向往、人民的期盼融为一体，体现了中华民族和中国人民的整体利益，表达了每一个中华儿女的共同愿景，成为激荡在中国人民心中的高昂旋律，成为中华民族团结奋斗的最大公约数和最大同心圆，成为激励中华儿女团结奋进、开辟未来的一面精神旗帜。</p>
        <img className={styles.img} src={sec2} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
