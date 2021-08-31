import * as Antd from "antd";
import sec17 from "./sec17.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>2016年12月14日－16日中央经济工作会议举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>习近平分析当前国内国际经济形势，总结2016年经济工作，阐明经济工作指导思想，部署2017年经济工作。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec17} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
