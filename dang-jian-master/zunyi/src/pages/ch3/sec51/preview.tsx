import * as Antd from "antd";
import sec51 from "./sec51.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>世界夏季特殊奥运会隆重举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   2007年10月2日至10月11日，2007年世界夏季特殊奥林匹克运动会在上海隆重举行。国家主席胡锦涛出席并宣布运动会开幕。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec51} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
