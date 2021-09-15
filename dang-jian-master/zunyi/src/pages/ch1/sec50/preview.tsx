import * as Antd from "antd";
import sec50 from "./sec50.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国人民政治协商会议第一届全体会议在北平举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   出席会议的代表共662人。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec50} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
