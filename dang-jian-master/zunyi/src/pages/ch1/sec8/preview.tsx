import * as Antd from "antd";
import sec8 from "./sec8.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共十二大召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec8} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>1981年9月1日—11日，中国共产党第十二次全国代表大会在北京举行。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
