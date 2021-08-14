import * as Antd from "antd";
import sec13 from "./sec13.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>国务院正式批复同意设立福州新区</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      国务院9月9日在中国政府网发布文件，正式批复同意设立福州新区。福州新区由此成为全国第14个、福建省首个国家级新区。
《批复》指出，要把建设好福州新区作为实施国家区域发展总体战略、贯彻落实国家支持福建省经济社会发展一系列重大政策的重要举措，实现在更高起点、更广范围、更宽领域推进海峡两岸交流合作，推动福建积极参与、全面融入“一带一路”战略实施，努力培育新的经济增长极。积极探索与现行体制协调、联动、高效的管理方式，积极稳妥扎实推进福州新区建设发展。要认真做好福州新区发展总体规划编制工作，规划建设必须符合土地利用总体规划、城市总体规划、镇总体规划、环境保护规划、水资源综合规划等相关专项规划的要求。要推动新区探索“多规合一”，优化空间布局，节约集约利用土地、林地、水、滩涂、湿地等资源，严格保护耕地和基本农田。涉及的重要政策和重大建设项目要按规定程序报批。
      </p>
        {/*<img src={sec13} alt=""/>*/}
        <img className={styles.img} src={sec13} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
