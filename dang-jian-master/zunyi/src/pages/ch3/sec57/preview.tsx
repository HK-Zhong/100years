import * as Antd from "antd";
import sec57 from "./sec57.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>国家统计局发布改革开放３０年经济社会发展成就系列报告</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   １０月２７日－３０日，国家统计局发布改革开放３０年经济社会发展成就系列报告。我国国内生产总值已由１９７８年的３６４５亿元迅速跃升至２００７年的２４９５３０亿元，在世界主要国家中的排名由１９７８年的第十位上升到第四位，仅次于美国、日本和德国。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec57} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
