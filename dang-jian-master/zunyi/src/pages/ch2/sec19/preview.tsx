import * as Antd from "antd";
import sec19 from "./sec19.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国第一颗氢弹空爆试验成功</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  在我国西部地区成功地爆炸了第一颗氢弹。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec19} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
