import OtherComment from "../other_comment/Other_comment.container";
import * as S from "./CommentList.styles";
import InfiniteScroll from "react-infinite-scroller";
import type { ICommentListUIProps } from "./CommentList.types";

const CommentListUI = (props: ICommentListUIProps): JSX.Element => {
  return (
    <S.CommentListWrap>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments?.map((el) => (
          <OtherComment key={el._id} data={el} />
        ))}
      </InfiniteScroll>
    </S.CommentListWrap>
  );
};

export default CommentListUI;
