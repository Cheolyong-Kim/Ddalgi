import * as MD from "./MarketDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import DOMPurify from "dompurify";
import KaKaoMap from "../../../commons/kakaoMap";
import {
  useMutationDeleteUseditem,
  useMutationToggleUseditemPick,
} from "../../../../commons/hooks/useMutation";
import { useRouter } from "next/router";
import { FETCH_USEDITEM } from "../../../../commons/queries";
import CustomCarousel from "../../../commons/carousel";
import {
  useQueryFetchUsedItem,
  useQueryFetchUserLoggedIn,
} from "../../../../commons/hooks/useQuery";
import Link from "next/link";
import TopButton from "../../../commons/top";

const MarketDetail = (): JSX.Element => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return <></>;

  const { data } = useQueryFetchUsedItem(router.query.id);
  const { data: userData } = useQueryFetchUserLoggedIn();
  const [deleteUseditem] = useMutationDeleteUseditem();
  const [toggleUseditemPick] = useMutationToggleUseditemPick();

  const onClickDeleteButton = async (): Promise<void> => {
    if (typeof router.query.id !== "string") return;

    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query.id,
        },
      });

      void router.push("/markets");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickLikeButton = (): void => {
    if (typeof router.query.id !== "string") return;

    void toggleUseditemPick({
      variables: {
        useditemId: router.query.id,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: {
            useditemId: router.query.id,
          },
        },
      ],
    });
  };

  return (
    <MD.MainWrap>
      <MD.PostHeader>
        <MD.Name>{data?.fetchUseditem.name}</MD.Name>
        <MD.ProfileWrap>
          <MD.ProfileInfoWrap>
            <MD.ProfileName>{data?.fetchUseditem.seller?.name}</MD.ProfileName>
            <div>
              <MD.CreatedAt>
                {getDate(data?.fetchUseditem.createdAt)}
              </MD.CreatedAt>
              {data?.fetchUseditem.seller?._id ===
              userData?.fetchUserLoggedIn._id ? (
                <>
                  <Link href={`/markets/${router.query.id}/edit`}>
                    <MD.UpdateButton>수정</MD.UpdateButton>
                  </Link>
                  <MD.deleteButton onClick={onClickDeleteButton}>
                    삭제
                  </MD.deleteButton>
                </>
              ) : (
                <></>
              )}
            </div>
          </MD.ProfileInfoWrap>
          <MD.ProfileImg
            src={
              data?.fetchUseditem.seller?.picture
                ? `https://storage.googleapis.com/${data.fetchUseditem.seller.picture}`
                : "/boards/id/profile.png"
            }
          />
        </MD.ProfileWrap>
      </MD.PostHeader>
      <MD.PostWrap>
        <CustomCarousel images={data?.fetchUseditem.images ?? [""]} />
        <MD.Contents
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchUseditem.contents ?? ""),
          }}
        ></MD.Contents>
        {data?.fetchUseditem.useditemAddress?.address && (
          <KaKaoMap address={data?.fetchUseditem.useditemAddress?.address} />
        )}
        <MD.LikeWrap onClick={onClickLikeButton}>
          <MD.LikeImg src="/boards/id/like.png" />
          <MD.LikeNum>{data?.fetchUseditem.pickedCount}</MD.LikeNum>
        </MD.LikeWrap>
        <MD.ButButtonWrap>
          <MD.Price>{data?.fetchUseditem.price?.toLocaleString()}원</MD.Price>
          <MD.BuyButton type="button">구매하기</MD.BuyButton>
        </MD.ButButtonWrap>
        <MD.TagWrap>
          <MD.Tag>{data?.fetchUseditem.tags}</MD.Tag>
        </MD.TagWrap>
      </MD.PostWrap>
      <TopButton />
    </MD.MainWrap>
  );
};

export default MarketDetail;
