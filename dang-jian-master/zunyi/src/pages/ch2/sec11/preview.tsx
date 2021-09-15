import * as Antd from "antd";
import sec11 from "./sec11.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>《论十大关系》报告</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  报告强调要调动国内外一切积极因素，为建设强大的社会主义国家而奋斗，并初步总结我国社会主义建设经验，提出探索适合中国情况的建设社会主义道路的任务。报告还提出共产党和民主党派“长期共存，互相监督”的方针。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec11} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
