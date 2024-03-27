import Comments from "../comments/index";
import * as C from "./CommentList.styles";
import InfiniteScroll from "react-infinite-scroller";
import type { ICommentListProps } from "./CommentList.types";
import type { IQuery } from "../../../../commons/types/generated/types";

const CommentList = (props: ICommentListProps): JSX.Element => {
  const onLoadMore = (): void => {
    if (props.data === undefined) return;

    void props.fetchMore({
      variables: {
        page: Math.ceil((props.data.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      updateQuery: (
        prev: Pick<IQuery, "fetchBoardComments">,
        { fetchMoreResult }: Pick<IQuery, "fetchBoardComments">,
      ) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return { fetchBoardsComments: [...prev.fetchBoardComments] };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <C.CommentListWrap>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments?.map((el) => (
          <Comments key={el._id} data={el} />
        ))}
      </InfiniteScroll>
    </C.CommentListWrap>
  );
};

export default CommentList;
