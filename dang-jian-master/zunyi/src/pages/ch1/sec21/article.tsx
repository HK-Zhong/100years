import * as Antd from "antd";
import sec21_1 from "./sec21_1.png";
import sec21_2 from "./sec21_2.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>申奥成功</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>申办奥运是中国人民长期以来的意愿，1991年2月，北京市向中国奥委会正式提出承办2000年奥运会的申请，随后在中国奥委会举行的全体会议上，一致同意了北京市的申请，并向国际奥委会和有关的国际体育组织通报了北京的申请。1991年3月，经国务院批准，北京2000年奥运会申办委员会正式成立，并于 1991年12月，派出北京奥申委代表团赴瑞士洛桑向国际奥委会主席递交了申请书。2001年7月13日，国际奥委会主席萨马兰奇先生在莫斯科宣布：北京成为2008年奥运会主办城市。2015年7月31日，国际奥委会主席托马斯·巴赫先生宣布：北京和张家口携手成为2022年冬奥会主办城市。
        </p>
        <img className={styles.img} src={sec21_1} alt=""/>
        <img className={styles.img} src={sec21_2}alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
