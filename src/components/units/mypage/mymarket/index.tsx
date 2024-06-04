import Link from "next/link";
import {
  useQueryFetchUsedItemsCountIPicked,
  useQueryFetchUsedItemsCountISold,
  useQueryFetchUsedItemsIPicked,
  useQueryFetchUsedItemsISold,
} from "../../../../commons/hooks/useQuery";
import { getDate } from "../../../../commons/libraries/utils";
import Pagination from "../../../commons/pagination";
import SearchBar from "../../../commons/searchbar";
import MyPageHeader from "../header";
import * as MM from "./MyMarket.styles";
import * as _ from "lodash";
import { useState } from "react";

const MyMarket = (): JSX.Element => {
  const [isISold, setIsISold] = useState(true);

  const { data, refetch } = useQueryFetchUsedItemsISold();
  const { data: pickedData, refetch: pickedDataRefetch } =
    useQueryFetchUsedItemsIPicked();
  const { data: dataCountISold } = useQueryFetchUsedItemsCountISold();
  const { data: dataCountIPicked } = useQueryFetchUsedItemsCountIPicked();

  const lastPage = Math.ceil(
    isISold
      ? (dataCountISold?.fetchUseditemsCountISold ?? 10) / 10
      : (dataCountIPicked?.fetchUseditemsCountIPicked ?? 10) / 10,
  );

  return (
    <MM.MainWrap>
      <MyPageHeader />
      <MM.MyMarketWrap>
        <MM.HeaderWrap>
          <MM.NavWrap>
            <MM.NavMenu isSelected={isISold} onClick={() => setIsISold(true)}>
              나의상품
            </MM.NavMenu>
            <MM.NavMenu isSelected={!isISold} onClick={() => setIsISold(false)}>
              관심있는상품
            </MM.NavMenu>
          </MM.NavWrap>
          <SearchBar
            searchDateOff={true}
            refetch={refetch}
            refetchCount={pickedDataRefetch}
          />
        </MM.HeaderWrap>
        <MM.Table>
          <MM.TableHead>
            <MM.TableRow>
              <MM.TableHeadData width={"10%"}>번호</MM.TableHeadData>
              <MM.TableHeadData width={"50%"}>상품명</MM.TableHeadData>
              <MM.TableHeadData width={"20%"}>판매가격</MM.TableHeadData>
              <MM.TableHeadData width={"20%"}>작성날짜</MM.TableHeadData>
            </MM.TableRow>
          </MM.TableHead>
          <tbody>
            {isISold ? (
              <>
                {data?.fetchUseditemsISold.map((el, index) => (
                  <MM.TableRow key={el._id}>
                    <MM.TableData width={"10%"}>{index + 1}</MM.TableData>
                    <MM.TableData width={"50%"}>
                      <Link href={`/markets/${el._id}`}>
                        <MM.UseditemLink isSold={!_.isEmpty(el.soldAt)}>
                          {el.name}
                        </MM.UseditemLink>
                      </Link>
                    </MM.TableData>
                    <MM.TableData width={"20%"}>
                      {el.price?.toLocaleString()}원
                    </MM.TableData>
                    <MM.TableData width={"20%"}>
                      {getDate(el.createdAt)}
                    </MM.TableData>
                  </MM.TableRow>
                ))}
              </>
            ) : (
              <>
                {pickedData?.fetchUseditemsIPicked.map((el, index) => (
                  <MM.TableRow key={el._id}>
                    <MM.TableData width={"10%"}>{index + 1}</MM.TableData>
                    <MM.TableData width={"50%"}>
                      <Link href={`/markets/${el._id}`} passHref>
                        <MM.UseditemLink
                          isSold={!_.isEmpty(el.soldAt)}
                          isDeleted={!_.isEmpty(el.deletedAt)}
                        >
                          {el.name}
                        </MM.UseditemLink>
                      </Link>
                    </MM.TableData>
                    <MM.TableData width={"20%"}>
                      {el.price?.toLocaleString()}원
                    </MM.TableData>
                    <MM.TableData width={"20%"}>
                      {getDate(el.createdAt)}
                    </MM.TableData>
                  </MM.TableRow>
                ))}
              </>
            )}
          </tbody>
        </MM.Table>
        <Pagination
          lastPage={lastPage}
          refetch={isISold ? refetch : pickedDataRefetch}
        />
      </MM.MyMarketWrap>
    </MM.MainWrap>
  );
};

export default MyMarket;
