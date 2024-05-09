import Link from "next/link";
import {
  useQueryFetchUsedItemOfTheBest,
  useQueryFetchUsedItems,
} from "../../../../commons/hooks/useQuery";
import TopButton from "../../../commons/top";
import UsedItem from "../../../commons/usedItem";
import * as M from "./Markets.styles";
import { useState } from "react";

const Markets = (): JSX.Element => {
  const [isSoldout, setIsSoldout] = useState(false);
  const [isSelected, setIsSelected] = useState(true);

  const { data } = useQueryFetchUsedItemOfTheBest();
  const { data: UsedItemsData, fetchMore: UsedItemsFetchMore } =
    useQueryFetchUsedItems(false);
  const { data: SoldoutUsedItemsData, fetchMore: SoldoutUsedItemsFetchMore } =
    useQueryFetchUsedItems(true);

  const onLoadMore = (isSoldout: boolean) => async () => {
    if (UsedItemsData === undefined || SoldoutUsedItemsData === undefined)
      return;

    if (isSoldout) {
      void SoldoutUsedItemsFetchMore({
        variables: {
          page:
            Math.ceil(
              (SoldoutUsedItemsData?.fetchUseditems.length ?? 10) / 10,
            ) + 1,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (fetchMoreResult.fetchUseditems === undefined) {
            return { fetchUseditems: [...prev.fetchUseditems] };
          }
          return {
            fetchUseditems: [
              ...prev.fetchUseditems,
              ...fetchMoreResult.fetchUseditems,
            ],
          };
        },
      });
    } else {
      void UsedItemsFetchMore({
        variables: {
          page: Math.ceil(
            (UsedItemsData?.fetchUseditems.length ?? 10) / 10 + 1,
          ),
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (fetchMoreResult.fetchUseditems === undefined) {
            return { fetchUseditems: [...prev.fetchUseditems] };
          }
          return {
            fetchUseditems: [
              ...prev.fetchUseditems,
              ...fetchMoreResult.fetchUseditems,
            ],
          };
        },
      });
    }
  };

  return (
    <M.MarketsWrap>
      <M.Title>인기있는 상품</M.Title>
      <M.BestUsedItemsWrap>
        {data?.fetchUseditemsOfTheBest
          .slice(0, 3)
          .map((el, index) => <UsedItem key={index} el={el} />)}
      </M.BestUsedItemsWrap>
      <M.UsedItemsWrap>
        <M.UsedItemsHeader>
          <M.Menu>
            <M.MenuSpan
              isSelected={isSelected}
              onClick={() => {
                setIsSoldout(false);
                setIsSelected((prev) => !prev);
              }}
            >
              판매중인상품
            </M.MenuSpan>
            <M.MenuSpan
              isSelected={!isSelected}
              onClick={() => {
                setIsSoldout(true);
                setIsSelected((prev) => !prev);
              }}
            >
              판매된상품
            </M.MenuSpan>
          </M.Menu>
          <Link href={"/markets/new"}>
            <M.CreateButton>상품등록</M.CreateButton>
          </Link>
        </M.UsedItemsHeader>
        {isSoldout ? (
          <M.UsedItemsScroll
            pageStart={0}
            loadMore={onLoadMore(isSoldout)}
            hasMore={true}
          >
            {SoldoutUsedItemsData?.fetchUseditems.map((el, index) => (
              <UsedItem key={index} el={el} />
            ))}
          </M.UsedItemsScroll>
        ) : (
          <M.UsedItemsScroll
            pageStart={0}
            loadMore={onLoadMore(isSoldout)}
            hasMore={true}
          >
            {UsedItemsData?.fetchUseditems.map((el, index) => (
              <UsedItem key={index} el={el} />
            ))}
          </M.UsedItemsScroll>
        )}
      </M.UsedItemsWrap>
      <TopButton />
    </M.MarketsWrap>
  );
};

export default Markets;
