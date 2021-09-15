import * as Antd from "antd";
import sec43 from "./sec43.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>学生运动爆发</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  南京、上海、苏州、杭州学生5000余名走上南京街头，举行“挽救教育危机联合大游行”，高呼“反饥饿”、“反内战”等口号，遭到反动当局镇压。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec43} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
