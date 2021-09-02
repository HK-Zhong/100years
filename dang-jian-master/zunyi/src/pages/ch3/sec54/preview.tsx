import * as Antd from "antd";
import sec54 from "./sec54.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>四川汶川发生里氏８级特大地震</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  四川汶川发生里氏８级特大地震，造成６９２２７人遇难，１７９２３人失踪，受灾群众１５１０万人。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec54} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
