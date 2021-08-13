import * as Antd from "antd";
import sec23 from "./sec23.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>西气东输工程全线开工</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec23} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2002年7月4日，西气东输工程开工典礼在北京隆重举行。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
