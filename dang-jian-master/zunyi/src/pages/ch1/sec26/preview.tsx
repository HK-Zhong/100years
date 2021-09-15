import * as Antd from "antd";
import sec26 from "./sec26.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>毛泽东发表《论持久战》</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  毛泽东作《论持久战》的长篇讲演。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec26} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
