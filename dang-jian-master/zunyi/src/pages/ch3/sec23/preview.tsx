import * as Antd from "antd";
import sec23 from "./sec23.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共第十四次全国代表大会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   党的十四大作出三项具有深远意义的决策：一是抓住机遇，加快发展；二是明确我国经济体制改革的目标是建立社会主义市场经济；三是确立邓小平建设有中国特色社会主义理论在全党的指导地位。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec23} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
