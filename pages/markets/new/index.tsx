import { withAuth } from "../../../src/components/commons/withAuth";
import MarketNew from "../../../src/components/units/market/marketNew";

const MarketNewPage = (): JSX.Element => {
  return <MarketNew isEdit={false} />;
};

export default withAuth(MarketNewPage);
