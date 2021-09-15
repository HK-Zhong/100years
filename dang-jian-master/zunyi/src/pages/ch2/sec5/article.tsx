import * as Antd from "antd";
import sec5 from "./sec5.png";
import styles from "../textarea.css";

// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>《中华人民共和国民族区域自治实施纲要》公布施行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>
          此前，成立于1947年5月1日的内蒙古自治政府于1949年12月2日改称内蒙古自治区人民政府。1955年10月1日，新疆维吾尔自治区成立。1958年3月5日，广西僮族自治区成立（1965年10月12日改称广西壮族自治区）。1958年10月25日，宁夏回族自治区成立。1965年9月9日，西藏自治区成立。
        </p>
        <img className={styles.img} src={sec5} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
