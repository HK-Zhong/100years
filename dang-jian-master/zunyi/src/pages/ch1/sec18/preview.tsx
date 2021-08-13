import * as Antd from "antd";
import sec18 from "./sec18.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共十五大召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec18} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>1997年9月12日—18日，中国共产党第十五次全国代表大会在北京举行。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
