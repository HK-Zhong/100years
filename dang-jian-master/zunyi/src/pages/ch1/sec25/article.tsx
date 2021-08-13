import * as Antd from "antd";
import sec25 from "./sec25.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>南水北调工程正式开工</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>南水北调工程12月27日上午10点正式开工建设。开工典礼在北京人民大会堂和江苏省
          、山东省施工现场同时举行。随着朱镕基总理在北京一声令下，南水北调东线一期工程
          江苏段在扬州市宝应县开工。国家主席江泽民为南水北调工程开工发来贺信，信中说，
          南水北调工程是优化我国水资源配置的重大战略性基础设施，事关中华民族兴旺发达的
          长远利益。
        </p>
        <img className={styles.img} src={sec25} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
