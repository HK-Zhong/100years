import * as Antd from "antd";
import sec20 from "./sec20.png";
import styles from "../textarea.css";
// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>邓小平视察上海</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>    １月28日－２月18日，邓小平在视察上海时指出，开发浦东不只是浦东的问题，是关系上海发展的问题，是利用上海这个基地发展长江三角洲和长江流域的问题。金融是现代经济的核心。中国在金融方面取得国际地位，首先要靠上海。他指出，计划经济和市场经济都是手段，市场也可以为社会主义服务。发展经济，不开放是很难搞起来的。要克服一个怕字，要有勇气。什么事情总要有人试第一个，才能开拓新路。试第一个就要准备失败，失败也不要紧。希望上海人民思想更解放一点，胆子更大一点，步子更快一点。</p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec20} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
