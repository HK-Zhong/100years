import * as Antd from "antd";
import sec52 from "./sec52.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国共产党第十七次全国代表大会隆重开幕</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   中国共产党第十七次全国代表大会于2007年10月15日至21日在北京召开。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec52} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
