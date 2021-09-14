import * as Antd from "antd";
import sec13 from "./sec13.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国共产党红军第四军第九次代表大会（古田会议）</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>   在福建省上杭古田召开中国共产党红军第四军第九次代表大会（古田会议）。大会根据中央九月来信的精神，总结了南昌起义以来红军的建设经验，批评了各种错误思想，坚持以无产阶级思想来建设党和人民军队。会议讨论和通过了多种决议案，其中最重要的是毛泽东起草的《关于纠正党内的错误思想》的决议案。《决议案》强调红军是“一个执行革命的政治任务的武装集团”，它必须服从党的领导，树立无产阶级思想，纠正单纯军事观点、极端民主化、非组织观点、绝对平均主义、主观主义、个人主义、流寇思想、盲动主义残余等；强调红军不但要打仗，而且要担负起宣传群众、组织群众、武装群众等项任务；并且要在军内外建立正确关系，对敌军采取正确政策等。这个《决议案》是中国共产党和红军建设的纲领性文献，后来对党和军队的建设发挥了重大作用。</p>
        {/*<img src={sec13} alt=""/>*/}
        <img className={styles.img} src={sec13} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
