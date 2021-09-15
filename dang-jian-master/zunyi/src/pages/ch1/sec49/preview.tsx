import * as Antd from "antd";
import sec49 from "./sec49.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>渡江战役</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  经过协商，中共代表团于4月15日提出《国内和平协定》（最后修正案），并宣布4月20日为最后签字时间。国民党政府拒绝接受。解放军遂发起渡江战役，国民党政府“划江而治”的图谋破产。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec49} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
