import * as Antd from "antd";
import sec23 from "./sec23.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>洛川会议</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>六届中央政治局于1937年8月22日至25日在陕北洛川冯家村召开扩大会议（即洛川会议），讨论制定动员全国军民开展民族解放战争，实行全面持久抗战的方针，进一步确定在抗日战争时期的任务及各项政策。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec23} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
