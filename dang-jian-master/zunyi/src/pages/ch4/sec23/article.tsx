import * as Antd from "antd";
import sec23 from "./sec23.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国共产党第十九届三中全会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
        全会通过《关于深化党和国家机构改革的决定》和《深化党和国家机构改革方案》。3月
        17日，十三届全国人大一次会议批准国务院机构改革方案。2019年7月5日，深化党和国
        家机构改革总结会议召开，习近平讲话指出，深化党和国家机构改革是对党和国家组织结
        构和管理体制的一次系统性、整体性重构，为完善和发展中国特色社会主义制度、推进国
        家治理体系和治理能力现代化提供了有力组织保障。
        党的十九届三中全会审议通过了《中共中央关于深化党和国家机构改革的决定》和《深化
        党和国家机构改革方案》，这是以习近平同志为核心的党中央站在党和国家事业发展全局，
        适应新时代中国特色社会主义发展要求作出的重大决策部署，是着眼实现全面深化改革总
        目标的重大制度安排，是推进国家治理体系和治理能力现代化的一场深刻变革，对于提高
        党的执政能力和领导水平，广泛调动各方面积极性、主动性、创造性，有效治理国家和社
        会，推动党和国家事业发展，都具有重大意义，也必将发挥重要作用。
      </p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec23} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
