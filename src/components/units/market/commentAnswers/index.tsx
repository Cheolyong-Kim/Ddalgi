import { useQueryFetchUsedItemQuestionAnswers } from "../../../../commons/hooks/useQuery";
import MarketComments from "../comments";
import type { ICommentAnswersProps } from "./CommentAnswers.types";
import * as MCA from "./CommentAnswers.styles";

const MarketCommentAnswers = (props: ICommentAnswersProps): JSX.Element => {
  const { data } = useQueryFetchUsedItemQuestionAnswers(props.id);
  if (!data) return <></>;

  return (
    <>
      {data?.fetchUseditemQuestionAnswers.map((el) => (
        <MCA.MainWrap key={el._id}>
          <MCA.AnswersWrap>
            <MCA.AnswersArrow src="/markets/답글화살표.png" />
            <MarketComments
              data={el}
              isQuestionAnswer={true}
              useditemQuestionId={props.id}
            />
          </MCA.AnswersWrap>
          <MarketCommentAnswers id={el._id} />
        </MCA.MainWrap>
      ))}
    </>
  );
};

export default MarketCommentAnswers;
