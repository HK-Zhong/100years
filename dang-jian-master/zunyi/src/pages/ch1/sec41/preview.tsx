import * as Antd from "antd";
import sec41 from "./sec41.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>全面内战爆发</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  1946年6月26日，国民党在完成战争准备后，不顾全国民众的强烈反对，撕毁停战协定和政协决议，以围攻鄂豫边宣化店为中心的中原解放区为起点，相继在晋南、苏皖边、鲁西南、胶济路及其两侧、冀东、绥东、察南、热河、辽南等地，向解放区展开大规模的进攻，全面内战爆发。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec41} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
