import * as Antd from "antd";
import sec1 from "./sec1.png";
import styles from "../textarea.css";
// @ts-ignore
import vid from "./vid.mp4"
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共十一届三中全会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
         全会根据中央工作会议的精神，作出了把全党工作的着重点转移到社
      会主义现代化建设上来的战略决策，指出实现现代化是一场广泛、深
      刻的革命，要求大幅度提高生产力，多方面改变同生产力发展不适应
      的生产关系和上层建筑，改变一切不适应的管理方式、活动方式和思
      想方式。全会确立了解放思想、实事求是的思想路线；否定了“两个
      凡是”的错误方针，果断地停止使用“以阶级斗争为纲”的错误口号。
        全会根据中央工作会议的精神，作出了把全党工作的着重点转移到
        社会主义现代化建设上来的战略决策。全会确立了解放思想、实事
        求是的思想路线；否定了“两个凡是”的错误方针，果断地停止使用
        “以阶级斗争为纲”的错误口号。全会提出，要在解放思想、实事求
        是、有错必纠的方针指导下，审查和解决历史上遗留的重大问题和
        一些重要领导人的功过是非问题；决定在党的生活和国家政治生活
        中加强民主，加强党的领导机构和成立中央纪律检查委员会。十一
        届三中全会是建国以来我党历史上具有深远意义的伟大转折。全会
        形成的以邓小平为核心的中央领导集体，承担起艰巨的使命，实现
        了伟大的历史性转折，开创了我国社会主义事业发展的新时期。
      </p>
        {/*<img src={sec1} alt=""/>*/}
        <video src={vid} style={{width:"600px",height:"400px"}} controls/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
