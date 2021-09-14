import * as Antd from "antd";
import sec45 from "./sec45.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国共产党第十六次全国代表大会开幕</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      举世瞩目的中国共产党第十六次全国代表大会上午在人民大会堂开幕。江泽民同志在报告中指出，这次大会的主题是：高举邓小平理论伟大旗帜，全面贯彻“三个代表”重要思想，继往开来，与时俱进，全面建设小康社会，加快推进社会主义现代化，为开创中国特色社会主义事业新局面而奋斗。江泽民代表第十五届中央委员会向大会作了题为《全面建设小康社会，开创中国特色社会主义事业新局面》的报告。他说，中国共产党第十六次全国代表大会，是我们党在新世纪召开的第一次代表大会，也是我们党在开始实施社会主义现代化建设第三步战略部署的新形势下召开的一次十分重要的代表大会。江泽民同志在热烈的掌声中向大会作报告。江泽民的报告共分十个部分：一、过去五年的工作和十三年的基本经验；二、全面贯彻“三个代表”重要思想；三、全面建设小康社会的奋斗目标；四、经济建设和经济体制改革；五、政治建设和政治体制改革；六、文化建设和文化体制改革；七、国防和军队建设；八、“一国两制”和实现祖国的完全统一；九、国际形势和对外工作；十、加强和改进党的建设。
      </p>
        {/*<img src={sec45} alt=""/>*/}
        <img className={styles.img} src={sec45} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
