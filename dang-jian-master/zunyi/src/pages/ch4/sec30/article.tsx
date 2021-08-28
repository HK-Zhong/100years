import * as Antd from "antd";
import sec30 from "./sec30.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国人民志愿军抗美援朝出国作战70周年大会召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      习近平在纪念中国人民志愿军抗美援朝出国作战70周年大会上讲话指出，在波澜壮阔的抗美援朝战争中，英雄的中国人民志愿军锻造了伟大抗美援朝精神。我们要铭记抗美援朝战争的艰辛历程和伟大胜利，敢于斗争、善于斗争，知难而进、坚韧向前，把新时代中国特色社会主义伟大事业不断推向前进。
      </p>
        {/*<img src={sec30} alt=""/>*/}
        <img className={styles.img} src={sec30} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
