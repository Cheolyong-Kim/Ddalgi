import { withAuth } from "../../../src/components/commons/withAuth";
import MyPoint from "../../../src/components/units/mypage/mypoint";

const MyPointPage = (): JSX.Element => {
  return <MyPoint />;
};

export default withAuth(MyPointPage);
