import {
  useQueryFetchPointTransactionsCountOfLoading,
  useQueryFetchPointTransactionsOfLoading,
} from "../../../../../commons/hooks/useQuery";
import { getDate } from "../../../../../commons/libraries/utils";
import Pagination from "../../../../commons/pagination";
import * as TLT from "../MyPoint.styles";

const TransactionsOfLoadingTable = (): JSX.Element => {
  const { data, refetch } = useQueryFetchPointTransactionsOfLoading();
  const { data: dataCount } = useQueryFetchPointTransactionsCountOfLoading();

  const lastPage = Math.ceil(
    dataCount?.fetchPointTransactionsCountOfLoading / 10,
  );

  return (
    <>
      <TLT.Table>
        <TLT.TableHead>
          <TLT.TableRow>
            <TLT.TableHeadData width={"20%"}>충전일</TLT.TableHeadData>
            <TLT.TableHeadData width={"50%"}>결제ID</TLT.TableHeadData>
            <TLT.TableHeadData width={"20%"}>충전내역</TLT.TableHeadData>
            <TLT.TableHeadData width={"10%"}>잔액</TLT.TableHeadData>
          </TLT.TableRow>
        </TLT.TableHead>
        <tbody>
          {data?.fetchPointTransactionsOfLoading.map((el, index) => (
            <TLT.TableRow key={index}>
              <TLT.TableData width={"20%"}>
                {getDate(el.createdAt)}
              </TLT.TableData>
              <TLT.TableData width={"50%"}>{el.impUid}</TLT.TableData>
              <TLT.TableData width={"20%"}>
                +{el.amount.toLocaleString()}
              </TLT.TableData>
              <TLT.TableData width={"10%"}>
                ₩{el.balance.toLocaleString()}
              </TLT.TableData>
            </TLT.TableRow>
          ))}
        </tbody>
      </TLT.Table>
      <Pagination lastPage={lastPage} refetch={refetch} />
    </>
  );
};

export default TransactionsOfLoadingTable;
