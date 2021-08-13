import * as Antd from "antd";
import sec5 from "./sec5.png";
import styles from "@/pages/ch1/textarea.css";

// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>四川雅安发生7.0级地震</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>   北京时间2013年4月20日8时02分四川省雅安市芦山县发生7.0级地震，震源深度13千米。四川省成都市、雅安市、乐山市，陕西省宝鸡市、汉中市、安康市等地均有较强震感。据雅安市政府应急办通报，震中芦山县龙门乡99%以上房屋垮塌，卫生院、住院部停止工作，停水停电。截至2013年4月24日10时，共发生余震4045次，3级以上余震103次，最大余震5.7级。受灾人口152万，受灾面积12500平方公里。给当地人民生命财产造成重大损失。习近平立即作出指示，要求千方百计救援受灾群众，最大限度减少伤亡，并前往灾区指导抗震救灾工作。李克强作出批示并赴灾区指导工作。在中共中央、国务院、中央军委领导下，广大军民团结奋战，夺取了抗震救灾斗争胜利。7月6日、15日，国务院先后印发《芦山地震灾后恢复重建总体规划》和《关于支持芦山地震灾后恢复重建政策措施的意见》。。</p>
        <img className={styles.img} src={sec5} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
