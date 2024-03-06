import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardsDetail.styles";

import type { IBoardsDetailProps } from "./BoardsDetail.types";
import YouTube from "../../../commons/youtube/Youtube.container";
import TopButton from "../../../commons/top";

const BoardsDetailUI = (props: IBoardsDetailProps): JSX.Element => {
  return (
    <S.MainWrap>
      <S.PostWrap>
        <S.PostHeader>
          <S.ContentsTitle>{props.data?.fetchBoard?.title}</S.ContentsTitle>
          <S.InfoWrap>
            <S.ProfileWrap>
              <S.ProfileName>{props.data?.fetchBoard?.writer}</S.ProfileName>
              <S.UpdateDeleteWrap>
                <S.DateCreated>
                  {getDate(props.data?.fetchBoard?.createdAt)}
                </S.DateCreated>
                <S.UpdateDelete onClick={props.onClickUpdate}>
                  수정
                </S.UpdateDelete>
                <S.UpdateDelete onClick={props.onClickDelete}>
                  삭제
                </S.UpdateDelete>
              </S.UpdateDeleteWrap>
            </S.ProfileWrap>
            <S.ProfileImg href="#"></S.ProfileImg>
          </S.InfoWrap>
        </S.PostHeader>
        <S.PostContentsWrap>
          <S.ContentsWrap>
            <S.ContentsImgWrap>
              {props.data?.fetchBoard.images?.map((el, index) => (
                <S.ContentsImg
                  key={index}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
            </S.ContentsImgWrap>
            <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          </S.ContentsWrap>
          {props.data?.fetchBoard?.youtubeUrl && (
            <S.YouTubeWrap>
              <YouTube youtubeUrl={props.data?.fetchBoard?.youtubeUrl ?? ""} />
            </S.YouTubeWrap>
          )}
          <S.LikeBoxWrap>
            <S.LikeBox onClick={props.onClickLike}>
              <S.LikeImg src="/boards/id/like.png" />
              <S.LikeNum type={true}>
                {props.data?.fetchBoard?.likeCount}
              </S.LikeNum>
            </S.LikeBox>
            <S.LikeBox onClick={props.onClickDislike}>
              <S.LikeImg src="/boards/id/dislike.png" />
              <S.LikeNum type={false}>
                {props.data?.fetchBoard?.dislikeCount}
              </S.LikeNum>
            </S.LikeBox>
          </S.LikeBoxWrap>
        </S.PostContentsWrap>
        <TopButton />
      </S.PostWrap>
    </S.MainWrap>
  );
};

export default BoardsDetailUI;
