import * as Antd from "antd";
import sec22 from "./sec22.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国共产党第十九次全国代表大会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
        大会正式代表2280人，特邀代表74人，代表全国8900多万党员。大会通过的报告《决胜全
        面建成小康社会，夺取新时代中国特色社会主义伟大胜利》，作出中国特色社会主义进入新
        时代、我国社会主要矛盾已经转化为人民日益增长的美好生活需要和不平衡不充分的发展之
        间的矛盾等重大政治论断，确立习近平新时代中国特色社会主义思想的历史地位，提出新时
        代坚持和发展中国特色社会主义的基本方略，确定决胜全面建成小康社会、开启全面建设社
        会主义现代化国家新征程的目标。大会通过《中国共产党章程（修正案）》，把习近平新时
        代中国特色社会主义思想同马克思列宁主义、毛泽东思想、邓小平理论、“三个代表”重要思
        想、科学发展观一道确立为党的指导思想并载入党章。</p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec22} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
