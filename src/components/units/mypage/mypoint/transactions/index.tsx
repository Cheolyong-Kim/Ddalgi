import { useQueryFetchPointTransactions } from "../../../../../commons/hooks/useQuery";
import { getDate } from "../../../../../commons/libraries/utils";
import * as TT from "../MyPoint.styles";

const TransactionsTable = (): JSX.Element => {
  const { data } = useQueryFetchPointTransactions();

  return (
    <TT.Table>
      <TT.TableHead>
        <TT.TableRow>
          <TT.TableHeadData width={"20%"}>날짜</TT.TableHeadData>
          <TT.TableHeadData width={"50%"}>내용</TT.TableHeadData>
          <TT.TableHeadData width={"20%"}>거래 및 충전 내역</TT.TableHeadData>
          <TT.TableHeadData width={"10%"}>잔액</TT.TableHeadData>
        </TT.TableRow>
      </TT.TableHead>
      <tbody>
        {data?.fetchPointTransactions.map((el, index) => (
          <TT.TableRow key={index}>
            <TT.TableData width={"20%"}>{getDate(el.createdAt)}</TT.TableData>
            <TT.TableData width={"50%"} isPlus={el.statusDetail !== "구매"}>
              {el.statusDetail}
            </TT.TableData>
            <TT.TableData width={"20%"} isPlus={el.statusDetail !== "구매"}>
              {el.statusDetail !== "구매" ? "+" : ""}
              {el.amount.toLocaleString()}
            </TT.TableData>
            <TT.TableData width={"10%"}>
              ₩{el.balance.toLocaleString()}
            </TT.TableData>
          </TT.TableRow>
        ))}
      </tbody>
    </TT.Table>
  );
};

export default TransactionsTable;
