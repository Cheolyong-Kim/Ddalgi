import { getDate } from "../../../../commons/libraries/utils";
import * as BD from "./BoardsDetail.styles";
import YouTube from "../../../commons/youtube";
import TopButton from "../../../commons/top";
import { useQueryFetchBoard } from "../../../../commons/hooks/useQuery";
import { useRouter } from "next/router";
import {
  useMutationDeleteBoard,
  useMutationDisLikeBoard,
  useMutationLikeBoard,
} from "../../../../commons/hooks/useMutation";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { FETCH_BOARD, FETCH_BOARDS } from "../../../../commons/queries";

const BoardsDetail = (): JSX.Element => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return <></>;

  const [deleteBoard] = useMutationDeleteBoard();
  const [likeBoard] = useMutationLikeBoard();
  const [dislikeBoard] = useMutationDisLikeBoard();

  const { data } = useQueryFetchBoard(router.query.id);

  const { onClickMoveToPage } = useMoveToPage();

  const onClickDelete = async (): Promise<void> => {
    if (typeof data?.fetchBoard._id !== "string") return;

    try {
      await deleteBoard({
        variables: {
          boardId: data?.fetchBoard._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
          },
        ],
      });
      alert("게시글이 삭제되었습니다.");

      void router.push(`/boards`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickLike = async (): Promise<void> => {
    if (typeof router.query.id !== "string") return;

    try {
      await likeBoard({
        variables: {
          boardId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.id },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickDislike = async (): Promise<void> => {
    if (typeof router.query.id !== "string") return;

    try {
      await dislikeBoard({
        variables: {
          boardId: router.query.id,
        },
        refetchQueries: [
          { query: FETCH_BOARD, variables: { boardId: router.query.id } },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <BD.MainWrap>
      <BD.PostWrap>
        <BD.PostHeader>
          <BD.ContentsTitle>{data?.fetchBoard?.title}</BD.ContentsTitle>
          <BD.InfoWrap>
            <BD.ProfileWrap>
              <BD.ProfileName>{data?.fetchBoard?.writer}</BD.ProfileName>
              <BD.UtilsWrap>
                <BD.DateCreated>
                  {getDate(data?.fetchBoard?.createdAt)}
                </BD.DateCreated>
                <BD.Util
                  onClick={onClickMoveToPage(`/boards/${router.query.id}/edit`)}
                >
                  수정
                </BD.Util>
                <BD.Util onClick={onClickDelete}>삭제</BD.Util>
              </BD.UtilsWrap>
            </BD.ProfileWrap>
            <BD.ProfileImg href="#"></BD.ProfileImg>
          </BD.InfoWrap>
        </BD.PostHeader>
        <BD.PostContentsWrap>
          <BD.ContentsWrap>
            <BD.ContentsImgWrap>
              {data?.fetchBoard.images?.map((el, index) => (
                <BD.ContentsImg
                  key={index}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
            </BD.ContentsImgWrap>
            <BD.Contents>{data?.fetchBoard?.contents}</BD.Contents>
          </BD.ContentsWrap>
          {data?.fetchBoard?.youtubeUrl && (
            <BD.YouTubeWrap>
              <YouTube youtubeUrl={data?.fetchBoard?.youtubeUrl ?? ""} />
            </BD.YouTubeWrap>
          )}
          <BD.LikeBoxWrap>
            <BD.LikeBox onClick={onClickLike}>
              <BD.LikeImg src="/boards/id/like.png" />
              <BD.LikeNum type={true}>{data?.fetchBoard?.likeCount}</BD.LikeNum>
            </BD.LikeBox>
            <BD.LikeBox onClick={onClickDislike}>
              <BD.LikeImg src="/boards/id/dislike.png" />
              <BD.LikeNum type={false}>
                {data?.fetchBoard?.dislikeCount}
              </BD.LikeNum>
            </BD.LikeBox>
          </BD.LikeBoxWrap>
        </BD.PostContentsWrap>
        <TopButton />
      </BD.PostWrap>
    </BD.MainWrap>
  );
};

export default BoardsDetail;
