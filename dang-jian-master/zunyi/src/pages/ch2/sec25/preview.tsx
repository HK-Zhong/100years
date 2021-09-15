import * as Antd from "antd";
import sec25 from "./sec25.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>唐山大地震</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>河北唐山、丰南地区发生里氏7.8级强烈地震，并波及天津、北京等地，24.2万多人罹难，16.4万多人重伤。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec25} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
