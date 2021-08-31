import * as Antd from "antd";
import sec29 from "./sec29.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>习近平在主持召开中央政治局常委会会议时，对做好2019年12月27日以来湖北武汉监测发现的不明原因肺炎疫情防控工作提出要求</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      新冠肺炎疫情是新中国成立以来我国遭遇的传播速度最快、感染范围最广、防控难度最大的一次重大突发公共卫生事件，也是百年来全球发生的最严重的传染病大流行。疫情发生后，党中央将疫情防控作为头等大事来抓。习近平亲自指挥、亲自部署，坚持把人民生命安全和身体健康放在第一位，带领全党全军全国各族人民迅速打响疫情防控的人民战争、总体战、阻击战，取得了全国抗疫斗争重大战略成果。9月8日，习近平在全国抗击新冠肺炎疫情表彰大会上讲话指出，在这场同严重疫情的殊死较量中，中国人民和中华民族以敢于斗争、敢于胜利的大无畏气概，铸就了生命至上、举国同心、舍生忘死、尊重科学、命运与共的伟大抗疫精神。要在全社会大力弘扬伟大抗疫精神，使之转化为全面建设社会主义现代化国家、实现中华民族伟大复兴的强大力量。
      </p>
        {/*<img src={sec29} alt=""/>*/}
        <img className={styles.img} src={sec29} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
