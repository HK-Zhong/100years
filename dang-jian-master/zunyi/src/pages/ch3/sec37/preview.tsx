import * as Antd from "antd";
import sec37 from "./sec37.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>西部地区开发会议在京举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   由国务院西部地区开发领导小组组织召开的西部地区开发会议在京举行。党中央、国务院有关部门和各省、自治区、直辖市以及新疆生产建设兵团的负责人参加了会议。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec37} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
