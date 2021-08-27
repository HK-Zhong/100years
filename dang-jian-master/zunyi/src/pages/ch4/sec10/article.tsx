import * as Antd from "antd";
import sec10 from "./sec10.png";
import styles from "../textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>首届世界互联网大会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>首届世界互联网大会在浙江乌镇举行。习近平致贺词，强调共同构建和平、安
          全、开放、合作的网络空间，建立多边、民主、透明的国际互联网治理体系。李
          克强同出席大会的中外代表座谈。本届世界互联网大会创造“四个第一”：第一次
          由中国举办世界互联网盛会；第一次汇集全球网络界领军人物共商发展大计；第
          一次全景展示中国互联网发展理念和成果；第一次以千年古镇命名世界网络峰会。</p>
        <img className={styles.img} src={sec10}alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
