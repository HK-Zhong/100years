import * as Antd from "antd";
import sec25 from "./sec25.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>平型关大捷</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>平型关大捷（又称平型关战斗、平型关伏击战），是指1937年9月25日，八路军在平型关为了配合第二战区的友军作战，阻挡日军攻势，由115师师长林彪、副师长聂荣臻指挥，充分发挥近战和山地战的特长，首次集中较大兵力对日军进行的一次成功伏击战，八路军在平型关取得首战大捷。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec25} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
