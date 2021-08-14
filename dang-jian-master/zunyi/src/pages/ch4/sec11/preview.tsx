import * as Antd from "antd";
import sec11 from "./sec11.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中巴地球资源卫星04星发射成功</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>2014年12月7日11时26分，我国在太原卫星发射中心用长征四号乙运载火箭，我国自主研制的长征四号乙运载火箭将中国和巴西联合研制的地球资源卫星04星发射升空，卫星顺利进入预定轨道。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec11} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
