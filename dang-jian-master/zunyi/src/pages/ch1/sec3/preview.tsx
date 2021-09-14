import * as Antd from "antd";
import sec3 from "./sec3.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国共产党第三次全国代表大会在广州召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec3} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>中国共产党第三次全国代表大会在广州举行，出席代表三十多人，代表党员四百二十人。大会的主要议程是讨论全体共产党员加入国民党的问题。大会接受共产国际执行委员会于本年１月１２日通过的《关于中国共产党与国民党的关系问题的决议》，决定全体共产党员以个人名义加入国民党，以建立各民主阶级的统一战线。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
