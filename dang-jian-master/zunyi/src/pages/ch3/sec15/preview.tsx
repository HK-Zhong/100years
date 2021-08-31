import * as Antd from "antd";
import sec15 from "./sec15.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>暗物质粒子探测卫星“悟空”发射任务圆满成功</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>12月17日8时12分，中国在酒泉卫星发射中心用长征二号丁运载火箭成功将暗物质粒子探测卫星“悟空”发射升空，卫星顺利进入预定转移轨道。此次发射任务圆满成功，标志着中国空间科学研究迈出重要一步。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec15} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
