import * as Antd from "antd";
import sec20 from "./sec20.png"

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>邓小平视察上海</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   １月28日－２月18日，邓小平在视察上海时指出，开发浦东不只是浦东的问题，是关系上海发展的问题，是利用上海这个基地发展长江三角洲和长江流域的问题。金融是现代经济的核心。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec20} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
