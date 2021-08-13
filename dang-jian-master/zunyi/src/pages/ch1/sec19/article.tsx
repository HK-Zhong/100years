import * as Antd from "antd";
import sec19 from "./sec19.png";
// @ts-ignore
import vid from "./vid.mp4";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>澳门回归</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>澳门回归（葡萄牙语：Transferência de Soberania de Macau），指1999年12月20日中国政府恢复对澳门行使主权，中华人民共和国澳门特别行政区成立，葡萄牙共和国结束统治澳门的历史事件。
          1553年（明嘉靖三十二年），葡萄牙人在准备登上澳门时，托言商船被风浪冲击缝裂，货船潮湿，要求借地晾晒，并贿赂了地方官吏汪柏，取得了停靠澳门码头进行贸易的权利。1557年正式在澳门定居。1582年（明万历十年），中葡订澳门借地协约。澳葡每年向香山县缴纳地租500两白银。
          1840年鸦片战争后，清政府战败。葡萄牙借此于1849年后相继占领了澳门半岛、氹仔岛和路环岛。1874年（清同治十三年）葡人闯入香山筑新关闸，擅自以此为澳门之界。1887年12月，清政府与葡萄牙王国签订《中葡友好通商条约》，确认葡萄牙可长驻澳门管理。从此占领澳门一百多年。
          1985年5月，葡萄牙总统埃亚内斯应邀访问中国，同中国总理赵紫阳就解决澳门问题进行友好磋商，访问结束后发表联合公报，双方决定就澳门问题于1986年上半年在北京进行谈判。1986年6月，中葡在北京就澳门问题举行首轮会谈。
          1987年4月13日，中葡两国政府签订了《中华人民共和国政府和葡萄牙共和国政府关于澳门问题的联合声明》，宣布澳门地区（包括澳门半岛、氹仔岛和路环岛）是中国的领土，中华人民共和国将于1999年12月20日对澳门恢复行使主权。1999年12月20日0时，中葡两国政府澳门政权交接仪式在澳门文化中心花园馆隆重举行。
        </p>
        {/*<img src={sec19}alt=""/>*/}
        <video  src={vid} style={{width:"600px",height:"400px"}} controls/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
