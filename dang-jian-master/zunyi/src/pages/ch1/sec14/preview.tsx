import * as Antd from "antd";
import sec14 from "./sec14.png";
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>邓小平南方谈话</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec14} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>1992年1月18日-2月21日，邓小平视察武昌、深圳、珠海、上海等地并发表重要谈话。</p>
      </div>


    </Antd.Typography.Text>
  </Antd.Typography>
);
