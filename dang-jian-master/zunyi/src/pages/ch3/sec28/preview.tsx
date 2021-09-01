import * as Antd from "antd";
import sec28 from "./sec28.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国政府对日本右翼分子表示“严重关切”</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   中国政府对日本一些右翼分子在钓鱼岛群岛的某一岛上建立灯塔的事件表示“严重关切”</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec28} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
