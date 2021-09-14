import * as Antd from "antd";
import sec14 from "./sec14.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>毛泽东撰写《星星之火，可以燎原》</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>  毛泽东针对红四军第一纵队司令员林彪的右倾悲观思想给他写了复信（即《星星之火，可以燎原》），信中批评那种不愿做艰苦工作创建农村革命根据地的错误倾向，指出只有中国工农红军和红色区域的建立和发展，才是半殖民地农民斗争的最高形式和促进全国革命高潮的重要因素，星星之火，必将燎原。那种先争取群众然后再举行全国武装起义夺取政权的理论，是于中国革命的实情不适合的。毛泽东在这封信中，总结各个革命根据地的经验，发展“工农武装割据”的思想，开始形成了以农村包围城市，在农村地区先建立和发展红色政权，待条件成熟时再夺取全国政权的关于中国革命道路的理论。这是对于马克思列宁主义关于武装夺取政权理论的重大发展。</p>
        {/*<img src={sec14} alt=""/>*/}
        <img className={styles.img} src={sec14} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
