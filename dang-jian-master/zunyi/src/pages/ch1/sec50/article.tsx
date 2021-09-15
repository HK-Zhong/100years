import * as Antd from "antd";
import sec50 from "./sec50.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国人民政治协商会议第一届全体会议在北平举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      出席会议的代表共662人。会议通过起临时宪法作用的《中国人民政治协商会议共同纲领》以及《中国人民政治协商会议组织法》、《中华人民共和国中央人民政府组织法》等文件。会议决定国都定于北平，北平改名为北京；纪年采用公元；以《义勇军进行曲》为代国歌；国旗为五星红旗。会议选举出中央人民政府委员会，毛泽东为中央人民政府主席，朱德、刘少奇、宋庆龄、李济深、张澜、高岗为副主席。中国人民政治协商会议的举行，标志着一百多年来中国人民争取民族独立和人民解放运动取得了历史性的伟大胜利，标志着爱国统一战线和全国人民大团结在组织上完全形成，标志着中国共产党领导的多党合作和政治协商制度正式确立。毛泽东在开幕词中向全世界宣告：“占人类总数四分之一的中国人从此站立起来了。”
      </p>
        {/*<img src={sec50} alt=""/>*/}
        <img className={styles.img} src={sec50} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
