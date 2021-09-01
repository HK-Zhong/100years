import * as Antd from "antd";
import sec24 from "./sec24.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>汪道涵和辜振甫在新加坡举行会谈</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   1993年4月27日至29日，海峡两岸关系协会会长汪道涵和台湾海峡交流基金会董事长辜振甫在新加坡举行会谈。双方就两岸经济合作、两岸科技文化交流、海协会与海基会的会务等问题交换了意见，并签署了《汪辜会谈共同协议》《两岸联系与会谈制度协议》《两岸公证书使用查证协议》和《两岸挂号函件查询、补偿事宜协议》等四份协议。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec24} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
