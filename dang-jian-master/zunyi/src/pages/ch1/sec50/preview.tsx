import * as Antd from "antd";
import sec50 from "./sec50.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>青藏铁路全线建成通车</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   7月1日 青藏铁路全线建成通车。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec50} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
