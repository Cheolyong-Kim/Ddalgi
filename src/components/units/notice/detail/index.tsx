import { useRouter } from "next/router";
import { useQueryDoc } from "../../../../commons/hooks/useFirebase";
import { getDate } from "../../../../commons/libraries/utils";
import TopButton from "../../../commons/top";
import * as ND from "./NoticeDetail.styles";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../../commons/libraries/firebase";

const NoticeDetail = (): JSX.Element => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return <></>;

  const { data } = useQueryDoc("Notice", router.query.id);

  const db = getFirestore(firebaseApp);

  const onClickDelete = async (): Promise<void> => {
    if (typeof router.query.id !== "string") return;

    try {
      await deleteDoc(doc(db, "Notice", router.query.id));
      alert("게시글이 삭제되었습니다.");

      void router.push(`/notice`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <ND.MainWrap>
      <ND.PostWrap>
        <ND.PostHeader>
          <ND.ContentsTitle>{data?.title}</ND.ContentsTitle>
          <ND.InfoWrap>
            <ND.ProfileWrap>
              <ND.ProfileName>{data?.writer}</ND.ProfileName>
              <ND.UtilsWrap>
                <ND.DateCreated>{getDate(data?.createdAt)}</ND.DateCreated>
                <ND.Util
                  onClick={() => {
                    void router.push(
                      `/notice/${router.query.id as string}/edit`,
                    );
                  }}
                >
                  수정
                </ND.Util>
                <ND.Util onClick={onClickDelete}>삭제</ND.Util>
              </ND.UtilsWrap>
            </ND.ProfileWrap>
            <ND.ProfileImg href="#"></ND.ProfileImg>
          </ND.InfoWrap>
        </ND.PostHeader>
        <ND.PostContentsWrap>
          <ND.ContentsWrap>
            <ND.ContentsImgWrap>
              {data?.images.length === 0 ? (
                <></>
              ) : (
                <>
                  {data?.images.map((el: string, index: number) => (
                    <ND.ContentsImg
                      key={index}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
                </>
              )}
            </ND.ContentsImgWrap>
            <ND.Contents>{data?.contents}</ND.Contents>
          </ND.ContentsWrap>
        </ND.PostContentsWrap>
        <TopButton />
      </ND.PostWrap>
    </ND.MainWrap>
  );
};

export default NoticeDetail;
