import * as Antd from "antd";
import sec23 from "./sec23.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国共产党第十九届三中全会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>2月26日－28日,中共十九届三中全会召开。全会通过《关于深化党和国家机构改革的决定》和《深化党和国家机构改革方案》。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec23} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
