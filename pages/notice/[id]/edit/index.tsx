import { doc, getDoc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../../src/commons/libraries/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { DocumentData } from "@firebase/firestore-types";
import NoticeNew from "../../../../src/components/units/notice/new/NoticeNew.container";

const NoticeUpdatePage = (): JSX.Element => {
  const [data, setData] = useState<DocumentData>();

  const router = useRouter();

  const db = getFirestore(firebaseApp);

  useEffect(() => {
    const getNoticeDetail = async (): Promise<void> => {
      if (typeof router.query.id !== "string") return;
      const docRef = doc(db, "Notice", router.query.id);
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());
    };
    void getNoticeDetail();
  }, []);

  return <NoticeNew data={data} isEdit={true} />;
};

export default NoticeUpdatePage;
