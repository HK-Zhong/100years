import * as Antd from "antd";
import sec7 from "./sec7.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中央军委深化国防和军队改革领导小组第一次全体会议</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec7} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p> 中央军委深化国防和军队改革领导小组第一次全体会议于2014年3月15日在北京召开。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
