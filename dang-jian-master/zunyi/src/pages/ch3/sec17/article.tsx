import * as Antd from "antd";
import sec17 from "./sec17.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>海南省和海南经济特区同时成立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>    海南经济特区，是中国七个（海南、深圳、厦门、珠海、汕头、喀什、霍尔果斯）经济特区中唯一的省级经济特区。海南经济特区的范围为海南本岛。
        海南省的行政区域包括海南岛和西沙群岛、南沙群岛、中沙群岛的岛礁及其海域，是中国面积第二大的岛。全省陆地（主要包括海南岛和西沙、南沙、中沙群岛）总面积3.54万平方公里（其中海南岛陆地面积3.39万平方公里），海域面积约200万平方公里。1988年4月13日，海南省和海南经济特区同时成立。
      </p>
        {/*<img src={sec17} alt=""/>*/}
        <img className={styles.img} src={sec17} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
