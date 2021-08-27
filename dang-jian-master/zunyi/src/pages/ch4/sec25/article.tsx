import * as Antd from "antd";
import sec25 from "./sec25.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>港珠澳大桥开通仪式在广东珠海举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
        经过6年筹备、9年建设，全长55公里的港珠澳大桥建成通车。这一超级工程集桥梁、隧道和
        人工岛于一体，其建设难度之大，被誉为桥梁界的“珠穆朗玛峰”。它的建成，不仅标志着中
        国从桥梁大国走向桥梁强国，也意味着粤港澳大湾区建设正式驶入快车道。
        在港珠澳大桥管理局调度中心的大屏上，港珠澳大桥全线22.9公里的桥面，6.7公里的沉管
        隧道，以及东西人工岛的运行情况一览无余。没有这座大桥之前，由于伶仃洋的阻隔，珠海、
        澳门与香港之间的陆上交通需要3个多小时。上世纪90年代末，香港回归祖国，为应对亚洲
        金融危机的影响，香港特别行政区政府认为有必要尽快建设连接港珠澳三地的跨海通道，以
        发挥港澳优势，寻找新的经济增长点。这一计划得到了中央人民政府的支持，2009年12月，
        东接香港特别行政区，西接广东省珠海市和澳门特别行政区的港珠澳大桥正式开工，这是在
        “一国两制”框架下粤港澳三地首次合作建设的超大型跨海交通工程。
      </p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec25} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
