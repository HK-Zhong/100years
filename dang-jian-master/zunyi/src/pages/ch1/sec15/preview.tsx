import * as Antd from "antd";
import sec15 from "./sec15.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>日本帝国主义侵占沈阳</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  日本帝国主义侵占沈阳。东北军张学良奉蒋介石“绝对不抵抗”命令，让东北军大部撤至山海关内，只有一部分奋起抵抗。随后几个月内日军即占领辽宁、吉林、黑龙江三省。九一八事变激起全国人民的抗日怒潮，各地人民纷纷要求抗日，反对蒋介石国民党的不抵抗主义。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec15} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
