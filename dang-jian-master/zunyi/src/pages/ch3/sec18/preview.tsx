import * as Antd from "antd";
import sec18 from "./sec18.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>全球最大单口径射电望远镜（FAST）在贵州落成启用</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>2015年9月25日具有我国自主知识产权的世界最大单口径巨型射电望远镜——500米口径球面射电望远镜（FAST）在贵州平塘落成启动。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec18} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
