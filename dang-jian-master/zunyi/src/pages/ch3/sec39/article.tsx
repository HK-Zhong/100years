import * as Antd from "antd";
import sec39 from "./sec39.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>“上海合作组织”成员国元首会议在上海举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      “上海合作组织”成员国元首会议在上海举行。中国国家主席江泽民、俄罗斯总统普京、哈萨克斯坦总统纳扎尔巴耶夫、吉尔吉斯斯坦总统阿卡耶夫、塔吉克斯坦总统拉赫莫诺夫、乌兹别克斯坦总统卡里莫夫六国元首出席会议并发表讲话。他们回顾并高度评价“上海五国”元首会晤机制五年来的丰硕成果，决定在其基础上建立涵盖多领域的区域性多边合作组织，并签署了《上海合作组织成立宣言》，对未来共同打击恐怖主义、极端主义和分裂主义“三股势力”达成广泛共识。江泽民在讲话中指出，“上海五国”进程是当代国际关系中重要的外交实践。它首创了以相互信任、裁军与合作安全为内涵的新型安全观，丰富了由中俄两国始创的以结伴而不结盟为核心的新型国家关系，提供了以大小国家共同倡导、安全先行、互利协作为特征的新型区域合作模式。它所培育的互信、互利、平等、协商、尊重多样性文明，谋求共同发展的“上海精神”，是处理国家关系的经验总结，对推动建立公正合理的国际政治经济新秩序具有重要的现实意义。
      </p>
        {/*<img src={sec39} alt=""/>*/}
        <img className={styles.img} src={sec39} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
