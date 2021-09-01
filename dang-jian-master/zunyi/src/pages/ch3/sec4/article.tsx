import * as Antd from "antd";
import sec4 from "./sec4.png";
import styles from "../textarea.css";

// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>《关于为刘少奇同志平反的决议》通过</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>
          2月23日到2月29日，中共十一届五中全会在北京举行。会议的主要议题是加强和改善党的领导。全会讨论和通过了《关于党内政治生活的若干准则》；讨论了《中国共产党章程》修改草案；通过了《关于召开党的第十二次全国代表大会的决议》。全会增选胡耀邦、赵紫阳为中央政治局常委；决定重新设立中央书记处，选举胡耀邦为中央书记处总书记。邓小平作了题为《坚持党的路线，改进工作方法》的讲话，着重强调了关于坚持党的政治路线、思想路线和组织路线问题。全会批准了汪东兴、纪登奎、吴德、陈锡联的辞职请求，免除或提请免除他们所担负的党和国家的领导职务。全会决定向全国人民代表大会建议修改宪法第四十五条，取消公民“有运用大鸣、大放、大辩论、大字报的权利”的规定。全会还通过了《关于为刘少奇同志平反的决议》，恢复刘少奇作为伟大的马克思主义者和无产阶级革命家、党和国家主要领导人之一的名誉。
        </p>
        <img className={styles.img} src={sec4}alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
