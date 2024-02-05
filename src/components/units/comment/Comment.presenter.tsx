import * as S from "./Comment.styles";

import Rate from "../../commons/Rate/Rate.container";

import type { ICommentProps } from "./Comment.types";

const CommentUI = (props: ICommentProps): JSX.Element => {
  return (
    <S.CommentWrap>
      <S.ReviewWrap>
        {props.isEdit ?? (
          <S.ReviewTitleWrap>
            <S.ReviewTitleImg src="/boards/id/review_title.png" />
            <S.ReviewTitle>댓글</S.ReviewTitle>
          </S.ReviewTitleWrap>
        )}
        <S.ReviewInfoWrap>
          <S.ReviewInfoInput
            type="text"
            placeholder="작성자"
            id="writer"
            onChange={props.onChangeInputs}
            value={
              props.inputs.writer !== ""
                ? props.inputs.writer
                : props.data?.writer ?? ""
            }
            disabled={props.isEdit}
          />
          <S.ReviewInfoInput
            type="password"
            placeholder="비밀번호"
            id="password"
            value={props.inputs.password}
            onChange={props.onChangeInputs}
          />
          <S.ReviewRateWrap>
            <Rate setValue={props.setRating} value={props.rating} />
          </S.ReviewRateWrap>
        </S.ReviewInfoWrap>
        <S.ReviewContentsWrap>
          <S.ReviewContents
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            maxLength={100}
            onChange={props.onChangeContents}
            value={
              props.contents !== ""
                ? props.contents
                : props.data?.contents ?? ""
            }
          ></S.ReviewContents>
          <S.ReviewContentsLimit>0/100</S.ReviewContentsLimit>
          <S.ReviewContentsSubmitBtn
            id={props.id}
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            color={props.isEdit}
          >
            {props.isEdit ? "수정" : "등록"}하기
          </S.ReviewContentsSubmitBtn>
        </S.ReviewContentsWrap>
      </S.ReviewWrap>
    </S.CommentWrap>
  );
};

export default CommentUI;
