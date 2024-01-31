import CommentListUI from "./CommentList.presenter";

import type { ICommentListParentProps } from "./CommentList.types";

const CommentList = (props: ICommentListParentProps): JSX.Element => {
  return <CommentListUI data={props.data} />;
};

export default CommentList;
