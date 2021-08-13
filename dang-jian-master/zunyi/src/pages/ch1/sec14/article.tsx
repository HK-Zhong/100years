import * as Antd from "antd";
import sec14 from "./sec14.png";
// @ts-ignore
import vid from "./vid.mp4";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>邓小平南方谈话</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>1992年1月18日至2月21日，邓小平先后到武昌、深圳、珠海、上海等地视察，并发表了一系列重要讲话，通称南方谈话。讲话针对人们思想中普遍存在的疑虑，重申了深化改革、加速发展的必要性和重要性，并从中国实际出发，站在时代的高度，深刻地总结了十多年改革开放的经验教训，在一系列重大的理论和实践问题上，提出了新观点，讲出了新思路，开创了新视野，有了重大新突破，将建设有中国特色社会主义理论与实践，大大地向前推进了一步。这个重要讲话，不仅标志着继毛泽东思想之后，马克思主义与中国实际相结合的第二次伟大历史性飞跃的思想结晶——邓小平理论的最终成熟和形成；而且也标志着中国改革开放第二次浪潮的掀起。邓小平的南方谈话，对中国90年代的经济改革与社会进步起到了关键性的推动作用，对21世纪中国的改革与发展，仍将产生不可估量的推动作用。
        </p>
        {/*<img src={sec14} alt=""/>*/}
        <video src={vid} style={{width:"600px",height:"400px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
