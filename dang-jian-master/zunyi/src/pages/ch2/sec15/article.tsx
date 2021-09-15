import * as Antd from "antd";
import sec15 from "./sec15.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>毛泽东在河南郑州召集中央工作会议</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>中共中央于1958年11月2日至10日在郑州召开了有部分中央领导人、大区负责人和部分省、市委第一书记参加的工作会议，即第一次郑州会议。这次会议是在毛泽东倡导下召开的。毛泽东在会上领读了斯大林著的《苏联社会主义经济问题》一书，并作了多次讲话。毛泽东讲话的主要内容是：（1）明确提出要划清社会主义与共产主义、集体所有制与全民所有制两个界限。（2）批驳了在现阶段就废除商品生产、价值规律、商品交换，实行商品调拨的错误主张。这次会议还针对当时全民大办钢铁、大兴水利、深翻耕地等连续苦战需要休整的实际情况，规定了要实行劳逸结合，既抓生产又抓生活的方针。
          到1959年7月，中共中央相继召开中共八届六中全会、第二次郑州会议、中共八届七中全会等一系列会议，初步纠正已经察觉到的“大跃进”和人民公社化运动中出现的“左”的错误。
        </p>
        {/*<img src={sec15} alt=""/>*/}
        <img className={styles.img} src={sec15} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
