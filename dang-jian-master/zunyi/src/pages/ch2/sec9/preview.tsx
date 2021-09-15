import * as Antd from "antd";
import sec9 from "./sec9.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>万隆会议</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec9} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>亚非会议，又称万隆会议，1955年4月18日至24日在印度尼西亚万隆举行。1954年4月，印度尼西亚政府提议召开亚非会议，同年12月，缅甸、锡兰（今斯里兰卡）、印度、印度尼西亚和巴基斯坦5国总理在印尼茂物举行会议，就召开亚非会议问题达成协议并联合发起。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
