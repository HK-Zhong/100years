import * as Antd from "antd";
import sec28 from "./sec28.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国第一艘国产航空母舰山东舰交付海军，习近平出席交接入列仪式并登舰视察</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>航空母舰的成功建造彰显了我国的工业实力，承载着国人几十年的梦想终成现实。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec26} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
