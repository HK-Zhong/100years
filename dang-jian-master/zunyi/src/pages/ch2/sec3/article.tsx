import * as Antd from "antd";
import sec3 from "./sec3.png";
import styles from "../textarea.css";

// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共中央作出抗美援朝、保家卫国的战略决策</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>
          10月8日，毛泽东发布命令，组成中国人民志愿军，彭德怀为司令员兼政治委员。19日，中国人民志愿军进入朝鲜战场。25日，志愿军与敌军遭遇，打响出国作战的第一次战役。全国掀起大规模抗美援朝运动。1953年7月27日，《关于朝鲜军事停战的协定》签署。到1958年10月，中国人民志愿军分三批全部撤出朝鲜回国。抗美援朝战争伟大胜利，是中国人民站起来后屹立于世界东方的宣言书，是中华民族走向伟大复兴的重要里程碑。抗美援朝战争中，英雄的中国人民志愿军始终发扬祖国和人民利益高于一切、为了祖国和民族的尊严而奋不顾身的爱国主义精神，英勇顽强、舍生忘死的革命英雄主义精神，不畏艰难困苦、始终保持高昂士气的革命乐观主义精神，为完成祖国和人民赋予的使命、慷慨奉献自己一切的革命忠诚精神，为了人类和平与正义事业而奋斗的国际主义精神，锻造了伟大抗美援朝精神。
        </p>
        <img className={styles.img} src={sec3}alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
