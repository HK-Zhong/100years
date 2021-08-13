import * as Antd from "antd";
import sec12 from "./sec12.png";
// @ts-ignore
import vid from "./vid.mp4";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>南沙海战</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>
          南沙海战（英文：越南语：Hải chiến Trường Sa）又称3·14海战、赤瓜礁海战。是1988年3月14日中国海军和越南海军在中国南沙群岛赤瓜礁海域发生的武装冲突，是中国海军的一场自卫还击战。 [1]
          南沙群岛历来是中国领土。1987年，应联合国教科文组织的要求，中国政府决定在南沙群岛永署礁建立1座海洋观测站。1988年3月13日，中国海军奉命组织舰船和人员在南沙群岛的赤瓜礁等岛礁进行考查。14日，越军海军604、605号运输船和505号登陆舰悍然窜到赤瓜礁海区进行挑衅活动，并派出43名海军人员强行登上赤瓜礁。越军无视中国考察人员的警告，首先使用冲锋枪向中国岛上人员开火，打伤中国考察人员。接着，越南海军舰船又向停泊在赤瓜礁附近海区的中国海军舰船开枪。中国海军考察舰船的人员，为捍卫祖国领海、领土主权，在忍无可忍的情况下，被迫进行自卫还击，击沉越南海军604号运输船，击伤605号运输船和重创505号登陆舰 [2]  。
          在战斗中，中国海军舰艇消耗100毫米炮弹285发，37毫米炮弹266发，击沉越船2艘，重创越船1艘，俘虏越军40多人，其中中校军官1人。越船伤亡约400人。中国海军舰艇仅杨志亮1人为越军走火轻伤。
        </p>
        {/*<img src={sec12} alt=""/>*/}
        <video src={vid} style={{width:"600px",height:"400px"}} controls/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
