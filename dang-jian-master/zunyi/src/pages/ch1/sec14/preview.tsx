import * as Antd from "antd";
import sec14 from "./sec14.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>毛泽东撰写《星星之火，可以燎原》</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>毛泽东针对红四军第一纵队司令员林彪的右倾悲观思想给他写了复信（即《星星之火，可以燎原》），信中批评那种不愿做艰苦工作创建农村革命根据地的错误倾向，指出只有中国工农红军和红色区域的建立和发展，才是半殖民地农民斗争的最高形式和促进全国革命高潮的重要因素，星星之火，必将燎原。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec14} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
