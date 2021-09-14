import * as Antd from "antd";
import sec8 from "./sec8.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>国民党发表为国民革命军出师北伐宣言</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec8} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>北伐战争的直接打击目标是受帝国主义支持的北洋军阀。在人民群众的大力支持下，北伐军势如破竹。到9月6日、7日，两湖战场的北伐军分别占领汉阳和汉口。10月10日攻克已被围困月余的武昌，全歼吴佩孚部主力。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
