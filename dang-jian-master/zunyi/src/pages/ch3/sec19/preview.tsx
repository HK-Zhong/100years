import * as Antd from "antd";
import sec19 from "./sec19.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>上海证券交易所成立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   11月26日，上海证券交易所正式成立。这是改革开放以来中国大陆开业的第一家证券交易所。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec19} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
