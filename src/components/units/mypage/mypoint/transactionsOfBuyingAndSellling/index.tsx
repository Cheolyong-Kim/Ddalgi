import Link from "next/link";
import {
  useQueryFetchPointTransactionsCountOfBuying,
  useQueryFetchPointTransactionsCountOfSelling,
  useQueryFetchPointTransactionsOfBuying,
  useQueryFetchPointTransactionsOfSelling,
} from "../../../../../commons/hooks/useQuery";
import { getDate } from "../../../../../commons/libraries/utils";
import Pagination from "../../../../commons/pagination";
import * as TBST from "../MyPoint.styles";

interface ITransactionsOfBuyingAndSellingTableProps {
  isBuy: boolean;
}

const TransactionsOfBuyingAndSellingTable = (
  props: ITransactionsOfBuyingAndSellingTableProps,
): JSX.Element => {
  const { data: buyData, refetch: buyDataRefetch } =
    useQueryFetchPointTransactionsOfBuying();
  const { data: sellData, refetch: sellDataRefetch } =
    useQueryFetchPointTransactionsOfSelling();
  const { data: buyDataCount } = useQueryFetchPointTransactionsCountOfBuying();
  const { data: sellDataCount } =
    useQueryFetchPointTransactionsCountOfSelling();

  const lastPage = props.isBuy
    ? Math.ceil(buyDataCount?.fetchPointTransactionsCountOfBuying / 10)
    : Math.ceil(sellDataCount?.fetchPointTransactionsCountOfSelling / 10);

  return (
    <>
      <TBST.Table>
        <TBST.TableHead>
          <TBST.TableRow>
            <TBST.TableHeadData width={"20%"}>거래일</TBST.TableHeadData>
            <TBST.TableHeadData width={"50%"}>상품명</TBST.TableHeadData>
            <TBST.TableHeadData width={"20%"}>거래내역</TBST.TableHeadData>
            <TBST.TableHeadData width={"10%"}>잔액</TBST.TableHeadData>
          </TBST.TableRow>
        </TBST.TableHead>
        <tbody>
          {props.isBuy ? (
            <>
              {buyData?.fetchPointTransactionsOfBuying.map((el, index) => (
                <TBST.TableRow key={index}>
                  <TBST.TableData width={"20%"}>
                    {getDate(el.createdAt)}
                  </TBST.TableData>
                  <TBST.TableData width={"50%"}>
                    <Link href={`/markets/${el.useditem?._id}`} passHref>
                      <TBST.useditemLink>{el.useditem?.name}</TBST.useditemLink>
                    </Link>
                  </TBST.TableData>
                  <TBST.TableData width={"20%"}>
                    {el.amount.toLocaleString()}
                  </TBST.TableData>
                  <TBST.TableData width={"10%"}>
                    ₩{el.balance.toLocaleString()}
                  </TBST.TableData>
                </TBST.TableRow>
              ))}
            </>
          ) : (
            <>
              {sellData?.fetchPointTransactionsOfSelling.map((el, index) => (
                <TBST.TableRow key={index}>
                  <TBST.TableData width={"20%"}>
                    {getDate(el.createdAt)}
                  </TBST.TableData>
                  <TBST.TableData width={"50%"}>
                    <Link href={`/markets/${el.useditem?._id}`} passHref>
                      <TBST.useditemLink>{el.useditem?.name}</TBST.useditemLink>
                    </Link>
                  </TBST.TableData>
                  <TBST.TableData width={"20%"}>
                    +{el.amount.toLocaleString()}
                  </TBST.TableData>
                  <TBST.TableData width={"10%"}>
                    ₩{el.balance.toLocaleString()}
                  </TBST.TableData>
                </TBST.TableRow>
              ))}
            </>
          )}
        </tbody>
      </TBST.Table>
      <Pagination
        lastPage={lastPage}
        refetch={props.isBuy ? buyDataRefetch : sellDataRefetch}
      />
    </>
  );
};

export default TransactionsOfBuyingAndSellingTable;
