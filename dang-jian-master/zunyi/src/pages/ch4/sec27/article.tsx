import * as Antd from "antd";
import sec27 from "./sec27.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共十九届四中全会召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      全会通过《关于坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化若干重大问题的决定》。全会指出，坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化的总体目标是，到我们党成立一百年时，在各方面制度更加成熟更加定型上取得明显成效；到2035年，各方面制度更加完善，基本实现国家治理体系和治理能力现代化；到新中国成立一百年时，全面实现国家治理体系和治理能力现代化，使中国特色社会主义制度更加巩固、优越性充分展现。全会强调，突出坚持和完善支撑中国特色社会主义制度的根本制度、基本制度、重要制度，着力固根基、扬优势、补短板、强弱项，构建系统完备、科学规范、运行有效的制度体系。
      </p>
        {/*<img src={sec27} alt=""/>*/}
        <img className={styles.img} src={sec27} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
