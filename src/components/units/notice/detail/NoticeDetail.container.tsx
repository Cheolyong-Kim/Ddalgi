import { deleteDoc, doc, getDoc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { DocumentData } from "@firebase/firestore-types";
import NoticeDetailUI from "./NoticeDetail.presenter";

const NoticeDetail = (): JSX.Element => {
  const [data, setData] = useState<DocumentData>();

  const router = useRouter();

  const db = getFirestore(firebaseApp);

  useEffect(() => {
    const getDetailNotice = async (): Promise<void> => {
      if (typeof router.query.id !== "string") return;
      const docRef = doc(db, "Notice", router.query.id);
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());
    };
    void getDetailNotice();
  }, []);

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

  const onClickUpdate = (): void => {
    if (typeof router.query.id !== "string") return;

    void router.push(`/notice/${router.query.id}/edit`);
  };

  return (
    <NoticeDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
    />
  );
};

export default NoticeDetail;
