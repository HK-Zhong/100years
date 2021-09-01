import * as Antd from "antd";
import sec18 from "./sec18.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共十三届五中全会在北京召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>    11月6日－9日，中共十三届五中全会在北京召开。全会审议并通过了《中共中央关于进一步治理整顿和深化改革的决定》。全会认为，继续坚定不移地执行治理整顿和深化改革的方针，是克服当前经济困难，实现国民经济持续、稳定、协调发展的根本途径。全会决定，包括１９８９年在内，用三年或者更长一点时间，基本完成治理整顿任务。全会讨论并通过了《中国共产党十三届五中全会关于同意邓小平同志辞去中共中央军事委员会主席职务的决定》。全会认为，邓小平同志从党和国家的根本利益出发，在自己身体还健康的时候辞去现任职务，实现他多年来一再提出的从领导岗位上完全退下来的夙愿，表现了一个无产阶级革命家的广阔胸怀。与会全体同志对他身体力行地为废除干部领导职务终身制作出的表率，表示崇高的敬意。全会在充分酝酿的基础上，决定江泽民为中共中央军事委员会主席，杨尚昆为第一副主席，刘华清为副主席，杨白冰为秘书长；并决定增补杨白冰为中共中央书记处书记。</p>
        {/*<img src={sec18} alt=""/>*/}
        <img className={styles.img} src={sec18} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
