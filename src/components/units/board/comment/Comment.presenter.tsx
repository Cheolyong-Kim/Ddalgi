import * as S from "./Comment.styles";

import type { ICommentProps } from "./Comment.types";

const CommentUI = (props: ICommentProps): JSX.Element => {
  return (
    <S.CommentWrap>
      <S.ReviewWrap>
        {props.isEdit ? (
          <></>
        ) : (
          <S.ReviewTitleWrap>
            <S.ReviewTitle>댓글</S.ReviewTitle>
          </S.ReviewTitleWrap>
        )}
        <S.ReviewInputWrap>
          <S.ReviewInfoWrap>
            <S.ReviewInfoInput
              type="text"
              placeholder="작성자"
              id="writer"
              onChange={props.onChangeInputs}
              value={
                props.inputs.writer !== ""
                  ? props.inputs.writer
                  : props.data?.writer ?? props.userData?.fetchUserLoggedIn.name
              }
            />
            <S.ReviewInfoInput
              type="password"
              placeholder="비밀번호"
              id="password"
              onChange={props.onChangeInputs}
              value={props.inputs.password}
            />
          </S.ReviewInfoWrap>
          <S.ReviewContentsWrap>
            <S.ReviewContents
              placeholder="답변을 작성해보세요."
              maxLength={100}
              onChange={props.onChangeContents}
              value={
                props.contents !== ""
                  ? props.contents
                  : props.data?.contents ?? ""
              }
            ></S.ReviewContents>
            <S.ReviewContentsLimit>
              {props.contents.length}/100
            </S.ReviewContentsLimit>
            {props.isEdit ? (
              <S.ReviewContentsCancleBtn onClick={props.onClickCancle}>
                취소
              </S.ReviewContentsCancleBtn>
            ) : (
              <></>
            )}
            <S.ReviewContentsSubmitBtn
              id={props.id}
              onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            >
              {props.isEdit ? "수정" : "등록"}
            </S.ReviewContentsSubmitBtn>
          </S.ReviewContentsWrap>
        </S.ReviewInputWrap>
      </S.ReviewWrap>
    </S.CommentWrap>
  );
};

export default CommentUI;
