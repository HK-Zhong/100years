import * as Antd from "antd";
import sec14 from "./sec14.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>两岸领导人习近平、马英九在新加坡进行历史性会面</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>中共中央总书记、国家主席习近平于11月7日下午同台湾方面领导人马英九在新加坡会面，就进一步推进两岸关系和平发展交换意见。这是1949年以来两岸领导人的首次会面。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec14} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
