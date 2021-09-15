import * as Antd from "antd";
import sec39 from "./sec39.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>重庆谈判</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   重庆谈判，是抗日战争胜利之际，中国共产党和中国国民党两党就中国未来的发展前途、建设大计在重庆进行的一次历史性会谈。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec39} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
