import * as Antd from "antd";
import sec6 from "./sec6.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>《中华人民共和国全国人民代表大会及地方各级人民代表大会选举法》公布施行</Antd.Typography.Title>
    <Antd.Typography.Text>
        <div style={{float:"left"}}>
          <img src={sec6} style={{width:"100px" ,height:"60px"}}/>
        </div>
        <div style={{float:"right"}}>
          <p>3月1日，《中华人民共和国全国人民代表大会及地方各级人民代表大会选举法》公布施行。</p>
        </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
