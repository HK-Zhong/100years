import * as Antd from "antd";
import sec40 from "./sec40.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>日本代表在投降书上签字</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   侵华日军128万人向中国投降。至此，中国抗日战争胜利结束，世界反法西斯战争也胜利结束。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec40} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
