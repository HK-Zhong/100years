import * as Antd from "antd";
import sec9 from "./sec9.png";
import styles from "../textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>万隆会议</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>亚非会议，又称万隆会议，1955年4月18日至24日在印度尼西亚万隆举行。1954年4月，印度尼西亚政府提议召开亚非会议，同年12月，缅甸、锡兰（今斯里兰卡）、印度、印度尼西亚和巴基斯坦5国总理在印尼茂物举行会议，就召开亚非会议问题达成协议并联合发起。
          两天大会之后，分政治、经济和文化三个委员会分别举行5天秘密会议，讨论了民族主权、种族主义、民族主义和反殖民主义斗争、世界和平、与会国的经济和文化合作等问题。会议就有关亚非国家的利害关系和共同关心的一些重大问题达成了一致，通过了《亚非会议最后公报》，内容包括经济合作、文化合作、人权和自决、附属地人民问题、其他问题、促进世界和平与合作以及关于促进世界和平与合作的宣言等7部分，并提出了处理国际关系的十项原则。
        </p>
        <img className={styles.img} src={sec9} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
