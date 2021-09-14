import * as Antd from "antd";
import sec45 from "./sec45.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国共产党第十六次全国代表大会开幕</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   举世瞩目的中国共产党第十六次全国代表大会上午在人民大会堂开幕。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec45} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
