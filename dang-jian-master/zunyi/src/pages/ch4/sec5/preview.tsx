import * as Antd from "antd";
import sec5 from "./sec5.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>四川雅安发生7.0级地震</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec5} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>北京时间2013年4月20日8时02分四川省雅安市芦山县发生7.0级地震，震源深度13千米。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
