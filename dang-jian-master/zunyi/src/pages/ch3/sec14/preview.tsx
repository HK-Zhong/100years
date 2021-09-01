import * as Antd from "antd";
import sec14 from "./sec14.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中英两国政府关于香港问题的联合声明</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>    9月26日，中英两国政府关于香港问题的联合声明在北京人民大会堂草签。联合声明宣布，中国政府决定在１９９７年７月１日对香港恢复行使主权，英国将在同日把香港交还给中国。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec14} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
