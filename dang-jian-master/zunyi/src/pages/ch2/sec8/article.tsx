import * as Antd from "antd";
import sec8 from "./sec8.png";
import styles from "../textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>一届全国人大一次会议举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>
          会议通过《中华人民共和国宪法》；选举毛泽东为国家主席，刘少奇为全国人大常委会委员长；决定周恩来为国务院总理；决定设立国防委员会，毛泽东兼任国防委员会主席。全国人民代表大会的召开，标志着人民代表大会制度在全国范围内建立起来。
          《政府工作报告》提出“我国伟大的人民革命的根本目的，是在于从帝国主义、封建主义和官僚资本主义的压迫下面，最后也从资本主义的束缚和小生产的限制下面，解放我国的生产力，使我国国民经济能够沿着社会主义的道路而得到有计划的迅速的发展，以便提高人民的物质生活和文化生活的水平，并且巩固我们国家的独立和安全。”
        </p>
        <img className={styles.img} src={sec8} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
