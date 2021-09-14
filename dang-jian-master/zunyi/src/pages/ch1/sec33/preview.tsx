import * as Antd from "antd";
import sec33 from "./sec33.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>北约袭击中国驻南斯拉夫大使馆</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   以美国为首的北约飞机用导弹袭击中国驻南斯拉夫大使馆，造成馆舍破坏和人员伤亡。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec33} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
