import * as Antd from "antd";
import sec20 from "./sec20.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国高速动车组技术实现全面自主</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>2017年6月26日11时05分，“复兴号”G123次和G124次高速列车在京沪高铁两端的北京南站和上海虹桥站双向首发。它们共同迎来了一个时代：中国标准动车组时代。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec20} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
