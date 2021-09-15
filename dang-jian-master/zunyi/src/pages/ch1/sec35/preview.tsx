import * as Antd from "antd";
import sec35 from "./sec35.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国战场成为世界反法西斯战争的东方主战场</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  随着苏德战争爆发，日本侵略者决意加紧对华作战，中国战场成为世界反法西斯战争的东方主战场。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec35} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
