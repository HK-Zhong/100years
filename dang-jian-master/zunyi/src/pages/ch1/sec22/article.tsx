import * as Antd from "antd";
import sec22 from "./sec22.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国加入世界贸易组织</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>世界贸易组织简称世贸组织，英文缩写为WTO，是一个总部设在日内瓦的独立于联合国的永久性国际组织，其前身是第二次世界大战后在1948年由23个国家签署成立的关税及贸易总协定（关贸总协定），中国为原始缔约国之一。2001年9月17日，世贸组织中国工作组第18次会议，终于通过了中国入世议定书及附件和中国工作组报告书，这标志着跨越两个世纪历时15年之久的中国复关与入世谈判的全部结束，2001年11月10日，中国在卡塔尔首都多哈召开的第四届世界贸易组织部长级会议上被接纳为世贸组织成员，12月11日中国正式入世。它不仅记录了中国社会主义市场经济体制逐步建立和完善的过程，也是中国融入经济全球化的真实写照。
        </p>
        <img className={styles.img} src={sec22} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
