import * as Antd from "antd";
import sec13 from "./sec13.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>城市经济体制改革座谈会在常州市召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>4月16日-25日，国家体改委在常州市召开城市经济体制改革座谈会。会议认为，沙市、常
          州、重庆等市的实践表明，搞好城市综合改革试点，对于推动整个经济体制改革具有重要意义。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec13} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
