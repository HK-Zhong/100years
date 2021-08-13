import * as Antd from "antd";
import sec10 from "./sec10.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>老山战役</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec10} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>老山战役一般是指1984年4月28日至1993年4月1日，许世友、杨得志指挥的系列战役。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
