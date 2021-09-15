import * as Antd from "antd";
import sec1 from "./sec1.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中华人民共和国中央人民政府成立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>下午2时，中央人民政府委员会召开第一次会议，一致决议接受《共同纲领》为施政纲领，任命周恩来为中央人民政府政务院总理兼外交部部长，毛泽东为人民革命军事委员会主席，朱德为人民解放军总司令。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec1} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
