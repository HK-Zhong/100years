import * as Antd from "antd";
import sec12 from "./sec12.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国共产党和国家主要领导人出席首个国家公祭日</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      2014年2月27日，第十二届全国人大常委会第七次会议通过决定，将每年的12月13日设立为南京大屠杀死难者国家公祭日。决议的通过，使得对南京大屠杀遇难者的纪念上升为国家层面，表明了中国人民反对侵略战争、捍卫人类尊严、维护世界和平的坚定立场。
2014年12月13日，中国共产党和国家主要领导人与南京出席首个国家公祭日。国家主席习近平在公祭日上讲到：南京大屠杀惨案铁证如山、不容篡改。为南京大屠杀死难者举行公祭仪式，是要唤起每一个善良的人们对和平的向往和坚守，而不是要延续仇恨。中国人民要庄严昭告国际社会：今天的中国，是世界和平的坚决倡导者和有力捍卫者，中国人民将坚定不移维护人类和平与发展的崇高事业，愿同各国人民真诚团结起来，为建设一个持久和平、共同繁荣的世界而携手努力。
      </p>
        {/*<img src={sec12} alt=""/>*/}
        <img className={styles.img} src={sec1} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
