import * as Antd from "antd";
import sec20 from "./sec20.png"

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国共产党第九次全国代表大会举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>中国共产党第九次全国代表大会于1969年4月1日至24日在北京举行。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec20} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
