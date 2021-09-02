import * as Antd from "antd";
import sec56 from "./sec56.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>神舟七号飞船发射</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  2008年9月25日21时10分，神舟七号飞船在酒泉卫星发射中心由新型长征二号F遥七火箭发射。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec56} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
