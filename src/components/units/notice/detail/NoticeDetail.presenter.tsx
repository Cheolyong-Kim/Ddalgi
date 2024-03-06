import { getDate } from "../../../../commons/libraries/utils";
import TopButton from "../../../commons/top";
import * as N from "./NoticeDetail.styles";
import type { INoticeDetailUIProps } from "./NoticeDetail.types";

const NoticeDetailUI = (props: INoticeDetailUIProps): JSX.Element => {
  return (
    <N.MainWrap>
      <N.PostWrap>
        <N.PostHeader>
          <N.ContentsTitle>{props.data?.title}</N.ContentsTitle>
          <N.InfoWrap>
            <N.ProfileWrap>
              <N.ProfileName>{props.data?.writer}</N.ProfileName>
              <N.UpdateDeleteWrap>
                <N.DateCreated>{getDate(props.data?.createdAt)}</N.DateCreated>
                <N.UpdateDelete onClick={props.onClickUpdate}>
                  수정
                </N.UpdateDelete>
                <N.UpdateDelete onClick={props.onClickDelete}>
                  삭제
                </N.UpdateDelete>
              </N.UpdateDeleteWrap>
            </N.ProfileWrap>
            <N.ProfileImg href="#"></N.ProfileImg>
          </N.InfoWrap>
        </N.PostHeader>
        <N.PostContentsWrap>
          <N.ContentsWrap>
            <N.ContentsImgWrap>
              {props.data?.images.length === 0 ? (
                <></>
              ) : (
                <>
                  {props.data?.images.map((el: string, index: number) => (
                    <N.ContentsImg
                      key={index}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
                </>
              )}
            </N.ContentsImgWrap>
            <N.Contents>{props.data?.contents}</N.Contents>
          </N.ContentsWrap>
        </N.PostContentsWrap>
        <TopButton />
      </N.PostWrap>
    </N.MainWrap>
  );
};

export default NoticeDetailUI;
