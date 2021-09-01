import * as Antd from "antd";
import sec26 from "./sec26.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>提出科教兴国的战略</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>   1995年5月，江泽民同志在全国科技大会上的讲话中提出了实施科教兴国的战略，确立科技和教育是兴国的手段和基础的方针。5月26日至30日，中共中央、国务院在北京召开全国科学技术大会。江泽民在大会上指出，党中央、国务院决定在全国实施科教兴国战略，是总结历史经验和根据我国现实情况作出的重大部署。这个方针大大提高了各级干部对科技和教育重要性的认识，增强了对科学技术是第一生产力的理解。实施“科教兴国”战略，既要充分发挥科技和教育在兴国中的作用，又要努力培植科技和教育这个兴国的基础。在当前，更要着重加强和扶持科技与教育，为国家的近期发展和长期稳定发展打好基础。提高生产者对经济增长的贡献率，尽快地建立起高科技企业，同时要加强提高国民素质，加强基础教育，注重人才的培养，重视创造性的科研工作。科技和教育具有双重的功能，既能为当前社会经济的发展提供各种手段，又为持续的、长远的发展提供必要的基础。科技和教育能够为经济和社会的发展提供知识、技术、人才，从而提供效益，是在此之前的科技和教育的投入所作的回报。</p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec26} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
