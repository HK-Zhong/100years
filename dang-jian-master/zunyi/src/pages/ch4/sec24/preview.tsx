import * as Antd from "antd";
import sec24 from "./sec24.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中央军委在南海海域举行海上阅兵</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>4月12日上午，中央军委在南海海域隆重举行海上阅兵，展示人民海军崭新面貌，激发强国强军坚定信念。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec24} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
