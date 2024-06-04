import { withAuth } from "../../../src/components/commons/withAuth";
import MyMarket from "../../../src/components/units/mypage/mymarket";

const MyMarketPage = (): JSX.Element => {
  return <MyMarket />;
};

export default withAuth(MyMarketPage);
