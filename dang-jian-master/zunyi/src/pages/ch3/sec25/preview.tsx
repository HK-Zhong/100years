import * as Antd from "antd";
import sec25 from "./sec25.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>港珠澳大桥开通仪式在广东珠海举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p> 10月23日，世界上最长的跨海大桥——港珠澳大桥开通仪式在广东珠海举行。
          经过6年筹备、9年建设，全长55公里的港珠澳大桥建成通车。这一超级工程集桥梁、隧道和
          人工岛于一体，其建设难度之大，被誉为桥梁界的“珠穆朗玛峰”。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec25} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
