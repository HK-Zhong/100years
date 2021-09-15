import * as Antd from "antd";
import sec19 from "./sec19.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>红一、红四方面军在甘肃会宁会师</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>  10月22日，红一、红二方面军在甘肃隆德将台堡（今属宁夏西吉）会师。至此，三大主力红军胜利会师。长征是人类历史上的伟大壮举，是一次理想信念、检验真理、唤醒民众、开创新局的伟大远征。长征的胜利，是中国革命转危为安的关键。长征铸就了伟大的长征精神，这就是：把全国人民和中华民族的根本利益看得高于一切，坚定革命的理想和信念，坚信正义事业必然胜利的精神；为了救国救民，不怕任何艰难险阻，不惜付出一切牺牲的精神；坚持独立自主、实事求是，一切从实际出发的精神；顾全大局、严守纪律、紧密团结的精神；紧紧依靠人民群众，同人民群众生死相依、患难与共、艰苦奋斗的精神。</p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec19} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
