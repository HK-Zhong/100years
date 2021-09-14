import * as Antd from "antd";
import sec38 from "./sec38.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>江泽民提出“三个代表”的重要思想</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   江泽民在广东考察工作期间提出了“三个代表”的重要思想。他强调，要把中国的事情办好，关键取决于我们的党，取决于党的思想、作风、组织、纪律状况和战斗力、领导水平。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec38} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
