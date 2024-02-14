import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { firebaseApp } from "../../../../src/commons/libraries/firebase";
import IntroductionNew from "../../../../src/components/units/introduction/new/introductionNew.container";

const IntroductionEdit = (): JSX.Element => {
  const [data, setData] = useState({
    age: -1,
    name: "",
    hobby: [""],
    profile: "",
    createdAt: "",
  });

  const router = useRouter();

  const db = getFirestore(firebaseApp);

  useEffect(() => {
    const getIntroduction = async (): Promise<void> => {
      if (typeof router.query.id !== "string") return;
      const docId = router.query.id;
      const docRef = doc(db, "Introduction", docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("해당하는 문서가 없습니다.");
      }
    };
    void getIntroduction();
  }, []);

  return <IntroductionNew isEdit={true} data={data} />;
};

export default IntroductionEdit;
