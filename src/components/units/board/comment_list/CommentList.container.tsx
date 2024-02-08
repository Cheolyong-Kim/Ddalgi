import type { IQuery } from "../../../../commons/types/generated/types";
import CommentListUI from "./CommentList.presenter";

import type { ICommentListParentProps } from "./CommentList.types";

const CommentList = (props: ICommentListParentProps): JSX.Element => {
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

  return <CommentListUI data={props.data} onLoadMore={onLoadMore} />;
};

export default CommentList;
