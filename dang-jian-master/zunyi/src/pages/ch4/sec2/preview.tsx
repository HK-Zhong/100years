import * as Antd from "antd";
import sec2 from "./sec2.png";
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>习近平总书记首提“中国梦”</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec2} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2012年11月29日，习近平在参观《复兴之路》展览时首次提出并阐述实现中华民族伟大复兴的中国梦。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
