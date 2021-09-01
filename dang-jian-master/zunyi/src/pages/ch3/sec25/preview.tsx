import * as Antd from "antd";
import sec25 from "./sec25.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>全国扶贫开发工作会议在北京召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   全国扶贫开发工作会议在北京召开。国务委员兼国务院扶贫开发工作领导小组组长陈俊生在会上宣布：国务院决定从今年起实施《国家八七扶贫攻坚计划》，力争在本世纪最后的7年内，基本解决目前全国8000万贫困人口的温饱问题。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec25} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
