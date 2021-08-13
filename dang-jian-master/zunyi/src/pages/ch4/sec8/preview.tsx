import * as Antd from "antd";
import sec8 from "./sec8.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国迎来首个“烈士纪念日”</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec8} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2014年8月31日，十二届全国人大常委会第十次会议通过的《全国人民代表大会常务委员会
          关于设立烈士纪念日的决定》规定，将9月30日设立为烈士纪念日。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
