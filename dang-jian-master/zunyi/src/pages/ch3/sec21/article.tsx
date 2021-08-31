import * as Antd from "antd";
import sec21 from "./sec21.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国人民解放军建军90周年阅兵</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
        8月1日，习近平在庆祝中国人民解放军建军90周年大会上讲话指出，党对军队的绝对领导
        是中国特色社会主义的本质特征，是党和国家的重要政治优势，是人民军队的建军之本、
        强军之魂。要坚持政治建军、改革强军、科技兴军、依法治军，全面提高国防和军队现代
        化水平，把人民军队建设成为世界一流军队。
        习近平强调，安享和平是人民之福，保卫和平是人民军队之责。天下并不太平，和平需要
        保卫。今天，我们比历史上任何时期都更接近中华民族伟大复兴的目标，比历史上任何时
        期都更需要建设一支强大的人民军队。我们要深入贯彻党的强军思想，坚定不移走中国特
        色强军之路，努力实现党在新形势下的强军目标，把我们这支英雄的人民军队建设成为世
        界一流军队。
      </p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec21} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
