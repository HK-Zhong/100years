import * as Antd from "antd";
import sec45 from "./sec45.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>辽沈战役，东北全境解放</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   辽沈战役是中国近代史解放战争中的“三大战役”之一，1948年9月12日开始，同年11月2日结束，共历时52天。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec45} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
