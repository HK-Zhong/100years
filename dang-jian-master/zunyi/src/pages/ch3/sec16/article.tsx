import * as Antd from "antd";
import sec16 from "./sec16.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>纪念中国人民抗日战争暨世界反法西斯战争胜利70周年大会在北京天安门广场举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      9月3日，纪念中国人民抗日战争暨世界反法西斯战争胜利70周年大会在北京天安门广场举行。习近平强调，中国将始终走和平发展道路，坚决捍卫中国人民抗日战争和世界反法西斯战争胜利成果，努力为人类作出新的更大的贡献；让我们共同铭记历史所启示的伟大真理：正义必胜！和平必胜！人民必胜！习近平宣布，中国将裁减军队员额30万。在随后举行的阅兵仪式上，习近平检阅受阅部队。
      </p>
        {/*<img src={sec16} alt=""/>*/}
        <img className={styles.img} src={sec16} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
