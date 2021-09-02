import * as Antd from "antd";
import sec61 from "./sec61.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国成为世界第二大经济体</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   2010年，日本内阁府发布的数据显示，日本当年名义GDP为54742亿美元，比中国少4044亿美元，中国GDP超过日本正式成为第二大经济体。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec61} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
