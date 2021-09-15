import * as Antd from "antd";
import sec10 from "./sec10.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共中央召开关于知识分子问题的会议</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec10} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>周恩来代表中共中央作《关于知识分子问题的报告》，充分肯定知识分子在社会主义建设中的作用，宣布知识分子的绝大部分已经是工人阶级的一部分。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
