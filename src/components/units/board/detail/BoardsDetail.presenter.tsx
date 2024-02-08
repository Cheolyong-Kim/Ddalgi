import { Global } from "@emotion/react";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardsDetail.styles";

import type { IBoardsDetailProps } from "./BoardsDetail.types";
import YouTube from "../../../commons/youtube/Youtube.container";
import { Tooltip } from "antd";

const BoardsDetailUI = (props: IBoardsDetailProps): JSX.Element => {
  return (
    <S.MainWrap>
      <Global styles={S.reset} />
      <S.PostWrap>
        <S.PostHeader>
          <S.HeaderProfile>
            <S.ProfileImg href="#"></S.ProfileImg>
            <S.ProfileWrap>
              <S.ProfileName>{props.data?.fetchBoard?.writer}</S.ProfileName>
              <S.DateCreated>
                {getDate(props.data?.fetchBoard?.createdAt)}
              </S.DateCreated>
            </S.ProfileWrap>
          </S.HeaderProfile>
          <S.HeaderMenu>
            <S.HeaderMenuLi>
              <S.HeaderMenuAnchor
                href="#"
                img_src={"/boards/id/link.png"}
              ></S.HeaderMenuAnchor>
            </S.HeaderMenuLi>
            <S.HeaderMenuLi>
              <Tooltip
                title={
                  props.data?.fetchBoard.boardAddress?.address +
                  " " +
                  props.data?.fetchBoard.boardAddress?.addressDetail
                }
              >
                <S.HeaderMenuAnchor
                  href="#"
                  img_src={"/boards/id/location.png"}
                ></S.HeaderMenuAnchor>
              </Tooltip>
            </S.HeaderMenuLi>
          </S.HeaderMenu>
        </S.PostHeader>
        <S.PostContentsWrap>
          <S.ContentsWrap>
            <S.ContentsTitle>{props.data?.fetchBoard?.title}</S.ContentsTitle>
            <S.ContentsImg
              src="/boards/id/temporary_image.png"
              alt="임시 이미지"
            />
            <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          </S.ContentsWrap>
          {props.data?.fetchBoard?.youtubeUrl && (
            <S.YouTubeWrap>
              <YouTube youtubeUrl={props.data?.fetchBoard?.youtubeUrl ?? ""} />
            </S.YouTubeWrap>
          )}
          <S.LikeBoxWrap>
            <S.LikeBox onClick={props.onClickLike}>
              <S.LikeImg src="/boards/id/thumb_up.png" />
              <S.LikeNum type={true}>
                {props.data?.fetchBoard?.likeCount}
              </S.LikeNum>
            </S.LikeBox>
            <S.LikeBox onClick={props.onClickDislike}>
              <S.LikeImg src="/boards/id/thumb_down.png" />
              <S.LikeNum type={false}>
                {props.data?.fetchBoard?.dislikeCount}
              </S.LikeNum>
            </S.LikeBox>
          </S.LikeBoxWrap>
        </S.PostContentsWrap>
      </S.PostWrap>
      <S.MenuWrap>
        <S.Menu>
          <S.MenuLi>
            <S.MenuLiAnchor href="#" onClick={props.onClickMove}>
              목록으로
            </S.MenuLiAnchor>
          </S.MenuLi>
          <S.MenuLi>
            <S.MenuLiAnchor href="#" onClick={props.onClickUpdate}>
              수정하기
            </S.MenuLiAnchor>
          </S.MenuLi>
          <S.MenuLi>
            <S.MenuLiAnchor href="#" onClick={props.onClickDelete}>
              삭제하기
            </S.MenuLiAnchor>
          </S.MenuLi>
        </S.Menu>
      </S.MenuWrap>
    </S.MainWrap>
  );
};

export default BoardsDetailUI;
