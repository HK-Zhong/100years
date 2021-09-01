import * as Antd from "antd";
import sec17 from "./sec17.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>海南省和海南经济特区同时成立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   1988年4月13日，海南省和海南经济特区同时成立。海南经济特区，是中国七个（海南、深圳、厦门、珠海、汕头、喀什、霍尔果斯）经济特区中唯一的省级经济特区。海南经济特区的范围为海南本岛。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec17} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
