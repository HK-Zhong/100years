import * as Antd from "antd";
import sec42 from "./sec42.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>庆祝西藏和平解放50周年大会在拉萨举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   中央政治局会议在陕北清涧枣林沟召开，讨论中央机关行动问题。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec42} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
