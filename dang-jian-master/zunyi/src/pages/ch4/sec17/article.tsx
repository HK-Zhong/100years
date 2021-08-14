import * as Antd from "antd";
import sec17 from "./sec17.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>2016年12月14日－16日中央经济工作会议举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      习近平分析当前国内国际经济形势，总结2016年经济工作，阐明经济工作指导思想，部署2017年经济工作。李克强对2017年经济工作作出具体部署并作总结讲话。会议指出，党的十八大以来，初步确立了适应经济发展新常态的经济政策框架。会议强调，要坚持以提高发展质量和效益为中心，坚持宏观政策要稳、产业政策要准、微观政策要活、改革政策要实、社会政策要托底的政策思路，坚持以推进供给侧结构性改革为主线，适度扩大总需求，加强预期引导，深化创新驱动，全面做好稳增长、促改革、调结构、惠民生、防风险各项工作，促进经济平稳健康发展和社会和谐稳定，以优异成绩迎接党的十九大胜利召开。
      </p>
        {/*<img src={sec17} alt=""/>*/}
        <img className={styles.img} src={sec17} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
