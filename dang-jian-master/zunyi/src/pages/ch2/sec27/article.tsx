import * as Antd from "antd";
import sec27 from "./sec27.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中央党校内部刊物《理论动态》刊登《实践是检验真理的唯一标准》一文</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>  《光明日报》以特约评论员名义公开发表这篇文章，新华社向全国转发。在邓小平的领导和许多老一辈革命家的支持下，一场关于真理标准问题的大讨论迅速在全党全社会展开。这场深刻而广泛的思想解放运动，成为正本清源、拨乱反正和改革开放的思想先导。</p>
        {/*<img src={sec27} alt=""/>*/}
        <img className={styles.img} src={sec27} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
