import { withAuth } from "../../src/components/commons/withAuth";
import Markets from "../../src/components/units/market/markets";

const MarketsPage = (): JSX.Element => {
  return <Markets />;
};

export default withAuth(MarketsPage);
