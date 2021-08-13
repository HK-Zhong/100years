import * as antd from "antd";
import { IRouteComponentProps, Link } from "umi";

export default (props: IRouteComponentProps) => (
  <antd.Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to="/">Back Home</Link>}
  />
);
