import * as Antd from "antd";
import sec1 from "./sec1.png";
import styles from "../textarea.css";
import sec2 from "@/pages/ch4/sec2/sec2.png";
// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国共产党第十八次全国代表大会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
            胡锦涛代表十七届中央委员会作题为《坚定不移沿着中国特色社会主义道路前进，为全面建成小康社会而奋斗》
        的报告，党的十八大是在我国进入全面建成小康社会决定性阶段召开的一次十分重要的大会。大会根据我国经济
        社会发展实际，确定了全面建成小康社会的目标，大会把科学发展观正式确立为党的指导思想，大会根据“五位一体”
        总体布局和全面建成小康社会目标要求，对推进中国特色社会主义建设作出全面部署。大会选举产生了十八届中央委
        员会和中央纪律检查委员会。党的十八届一中全会选举习近平、李克强、张德江、俞正声、刘云山、王岐山、张高丽
        为中央政治局常委，习近平为中央委员会总书记，决定习近平为中央军事委员会主席，批准王岐山为中央纪律检查委
        员会书记。
      </p>
        {/*<img src={sec1} alt=""/>*/}
        <img className={styles.img} src={sec1} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
