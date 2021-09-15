import * as Antd from "antd";
import sec16 from "./sec16.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>第五次反“围剿”失败，中央主力红军被迫长征</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  10月10日，由于国民党重兵已推进到中央革命根据地腹地，中央红军被迫实行战略转移。当日晚，中共中央和中革军委机关从瑞金出发，前往集结地域。从17日起，中央红军主力第一、第三、第五、第八、第九军团及中央、军委机关和直属部队8.6万余人，陆续从集结地出发突围。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec16} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
