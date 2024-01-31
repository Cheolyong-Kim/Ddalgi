import OtherComment from "../other_comment/Other_comment.container";
import * as S from "./CommentList.styles";

import type { ICommentListParentProps } from "./CommentList.types";

const CommentListUI = (props: ICommentListParentProps): JSX.Element => {
  return (
    <S.CommentListWrap>
      {props.data?.fetchBoardComments?.map((el) => (
        <OtherComment key={el._id} data={el} />
      ))}
    </S.CommentListWrap>
  );
};

export default CommentListUI;
