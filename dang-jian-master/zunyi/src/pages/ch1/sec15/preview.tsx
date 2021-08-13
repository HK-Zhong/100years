import * as Antd from "antd";
import sec15 from "./sec15.png";
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共十四大召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec15} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>1992年10月12日—18日，中国共产党第十四次全国代表大会在北京举行。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
