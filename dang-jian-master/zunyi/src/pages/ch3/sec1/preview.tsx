import * as Antd from "antd";
import sec1 from "./sec1.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>《告台湾同胞书》发表</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>１月１日，全国人大会常委会发表《告台湾同胞书》，指出：实现中国的统一，是人心所向，大势所趋。我国领导人已经表示决心，一定要考虑现实情况，完成祖国统一大业。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec1} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
