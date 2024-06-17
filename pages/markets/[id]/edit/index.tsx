import { useRouter } from "next/router";
import { useQueryFetchUsedItem } from "../../../../src/commons/hooks/useQuery";
import MarketNew from "../../../../src/components/units/market/marketNew";
import { withAuth } from "../../../../src/components/commons/withAuth";

const MarketsEdit = (): JSX.Element => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return <></>;

  const { data, client } = useQueryFetchUsedItem(router.query.id);

  return <MarketNew isEdit={true} data={data} client={client} />;
};

export default withAuth(MarketsEdit);
