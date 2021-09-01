import * as Antd from "antd";
import sec27 from "./sec27.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>与周边国家在上海共同签署关于在边境地区加强军事领域信任的协定</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   4月26日，国家主席江泽民和俄罗斯总统叶利钦、哈萨克斯坦总统纳扎尔巴耶夫、吉尔吉斯斯坦总统阿卡耶夫、塔吉克斯坦总统拉赫莫诺夫在上海共同签署《中华人民共和国和俄罗斯联邦、哈萨克斯坦共和国、吉尔吉斯共和国、塔吉克斯坦共和国关于在边境地区加强军事领域信任的协定》</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec27} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
