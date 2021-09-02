import * as Antd from "antd";
import sec57 from "./sec57.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>国家统计局发布改革开放30年经济社会发展成就系列报告</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      １０月２７日－３０日，国家统计局发布改革开放３０年经济社会发展成就系列报告。我国国内生产总值已由１９７８年的３６４５亿元迅速跃升至２００７年的２４９５３０亿元，在世界主要国家中的排名由１９７８年的第十位上升到第四位，仅次于美国、日本和德国。人均国民总收入由１９７８年的１９０美元上升至２００７年的２３６０美元。按照世界银行的划分标准，我国已经由低收入国家跃升至世界中等偏下收入国家行列。外汇储备由１９７８年的１．６７亿美元扩大到２００７年的１５２８２亿美元，稳居世界第一位。进出口贸易总额从１９７８年的２０６亿美元猛增到２００７年的２１７３７亿美元，增长了１０４倍，在世界贸易中的位次由改革开放初期的第三十二位上升到２００４年以来的第三位。
      </p>
        {/*<img src={sec57} alt=""/>*/}
        <img className={styles.img} src={sec57} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
