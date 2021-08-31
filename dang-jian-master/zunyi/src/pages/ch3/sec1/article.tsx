import * as Antd from "antd";
import sec1 from "./sec1.png";
import styles from "../textarea.css";
// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>《告台湾同胞书》发表</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>   １月１日，全国人大会常委会发表《告台湾同胞书》，指出：实现中国的统一，是人心所向，大势所趋。我国领导人已经表示决心，一定要考虑现实情况，完成祖国统一大业。我们建议双方首先结束军事对峙状态；尽快实现通航通邮；发展贸易，进行经济交流。当天下午，全国政协就此举行座谈会。邓小平在会上发表《解决台湾问题，完成祖国统一大业提上具体日程》的讲话。
      </p>
        {/*<img src={sec1} alt=""/>*/}
        <img className={styles.img} src={sec1} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
