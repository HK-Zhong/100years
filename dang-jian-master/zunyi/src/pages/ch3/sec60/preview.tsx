import * as Antd from "antd";
import sec60 from "./sec60.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>2010年上海世界博览会举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   中国2010年上海世界博览会举行，主题是“城市，让生活更美好”。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec60} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
