import * as Antd from "antd";
import sec12 from "./sec12.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国共产党第八次全国代表大会举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>大会正式代表1026人，候补代表107人，代表全国1073万党员。毛泽东致开幕词，刘少奇作政治报告，周恩来作关于发展国民经济的第二个五年计划的建议的报告，邓小平作关于修改党章的报告。大会指出，社会主义改造已取得决定性胜利，社会主义制度已基本上建立。国内的主要矛盾，已经是人民对于建立先进的工业国的要求同落后的农业国的现实之间的矛盾，已经是人民对于经济文化迅速发展的需要同当前经济文化不能满足人民需要的状况之间的矛盾。党和人民当前的主要任务，就是要集中力量解决这个矛盾，把我国尽快地从落后的农业国变为先进的工业国。大会着重提出加强执政党建设的问题，通过新修订的《中国共产党章程》。</p>
        {/*<img src={sec12} alt=""/>*/}
        <img className={styles.img} src={sec12} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
