import * as Antd from "antd";
import sec2 from "./sec2.png";
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>苏联政府决定同新中国建立外交关系</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec2} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>10月3日，周恩来复电表示，欢迎立即建立中华人民共和国与苏联之间的外交关系，并互派大使。
          10月3日，苏联即任命高级外交官尼古拉·瓦西里维奇·罗申为首任驻华特命全权大使。几乎是同时，国务院任命新华社常驻莫斯科记者戈宝权同志为中华人民共和国驻苏联大使馆参赞兼临时代办，即刻开始中国驻苏联大使馆的建馆工作。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
