import * as Antd from "antd";
import sec6 from "./sec6.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>深圳、珠海、厦门经济特区正式批准建立</Antd.Typography.Title>
    <Antd.Typography.Text>
        <div style={{float:"left"}}>
          <img src={sec6} style={{width:"100px" ,height:"60px"}}/>
        </div>
        <div style={{float:"right"}}>
          <p>自1980年8月起,深圳，珠海，厦门经济特区相继正式批准建立</p>
        </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
