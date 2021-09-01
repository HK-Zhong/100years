import * as Antd from "antd";
import sec29 from "./sec29.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>江泽民视察人民日报社并发表重要讲话</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   9月26日，江泽民视察人民日报社并发表重要讲话指出，舆论导向正确，是党和人民之福；舆论导向错误，是党和人民之祸。他强调要把新闻舆论的领导权牢牢掌握在忠于马克思主义、忠于党、忠于人民的人手里。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec29} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
