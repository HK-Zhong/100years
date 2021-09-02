import * as Antd from "antd";
import sec46 from "./sec46.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国首次载人航天飞船飞行成功</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   2003年10月15日9时整，中国自主研制的“神州”五号载人飞船在中国酒泉卫星发射中国心中国“长征”二号F型运载火箭发射升空。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec46} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
