import { useRouter } from "next/router";
import MarketDetail from "../../../src/components/units/market/marketDetail";
import MarketComment from "../../../src/components/units/market/commentNew";
import { useQueryFetchUsedItemQuestions } from "../../../src/commons/hooks/useQuery";
import MarketCommentList from "../../../src/components/units/market/commentList/indext";
import { withAuth } from "../../../src/components/commons/withAuth";

const MarketDetailPage = (): JSX.Element => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return <></>;

  const { data, fetchMore } = useQueryFetchUsedItemQuestions(router.query.id);

  return (
    <div style={{ width: "1200px" }}>
      <MarketDetail />
      <MarketComment />
      <MarketCommentList data={data} fetchMore={fetchMore} />
    </div>
  );
};

export default withAuth(MarketDetailPage);
