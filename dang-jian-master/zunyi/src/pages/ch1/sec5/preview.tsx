import * as Antd from "antd";
import sec5 from "./sec5.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国共产党第四次全国代表大会在上海举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec5} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>中国共产党第四次全国代表大会在上海举行。出席代表20人，代表党员994人。大会的中心议题是：如何加强党对日益高涨的革命运动的领导，以及在宣传工作、组织工作和群众工作方面如何准备迎接大革命的高潮。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
