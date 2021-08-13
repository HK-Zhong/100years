import * as Antd from "antd";
import sec26 from "./sec26.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国首次载人航天飞船飞行成功</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec26} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2003年10月15日，中国首次载人航天飞船飞行成功。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
