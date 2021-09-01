import * as Antd from "antd";
import sec29 from "./sec29.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>江泽民视察人民日报社并发表重要讲话</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>   9月26日，江泽民视察人民日报社并发表重要讲话指出，舆论导向正确，是党和人民之福；舆论导向错误，是党和人民之祸。他强调要把新闻舆论的领导权牢牢掌握在忠于马克思主义、忠于党、忠于人民的人手里；新闻舆论单位一定要把坚定正确的政治方向放在一切工作的首位，坚持正确的舆论导向；新闻舆论工作要紧紧围绕经济建设这个中心，服从、服务于全党全国工作的大局。为了更好地担负起以正确的舆论引导人的任务，新闻工作者必须努力提高自己的思想政治素质和业务素质，要打好理论路线根底、政策法律纪律根底、群众观点根底、知识根底和新闻业务根底。在新的历史时期，仍要坚持发扬党的新闻工作的优良作风：一、敬业的作风；二、实事求是的作风；三、艰苦奋斗的作风；四、清正廉洁的作风；五、严谨细致的作风；六、勇于创新的作风。</p>
        {/*<img src={sec29} alt=""/>*/}
        <img className={styles.img} src={sec29} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
