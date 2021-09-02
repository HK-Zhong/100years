import * as Antd from "antd";
import sec51 from "./sec51.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>世界夏季特殊奥运会隆重举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      2007年10月2日至10月11日，2007年世界夏季特殊奥林匹克运动会在上海隆重举行。国家主席胡锦涛出席并宣布运动会开幕。世界特殊奥林匹克运动会是面向智障人土的综合性大型运动会。这次在上海举办的特奥会，是第一次在发展中国家、在亚洲举办的夏季特奥会，是迄今为止我国举办的参赛国家和地区、参赛人员最多的国际体育赛事。本届特奥会设有21个比赛项目和4个表演项目，有1万多名运动员、教练员参加。中国特奥代表团在本届特奥会上共获得金牌459枚，银牌333枚，铜牌258枚。
      </p>
        {/*<img src={sec51} alt=""/>*/}
        <img className={styles.img} src={sec51} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
