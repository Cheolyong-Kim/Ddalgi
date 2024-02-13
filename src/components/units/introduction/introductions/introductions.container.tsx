import { getFirestore, query, collection, getDocs } from "firebase/firestore";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { sortList } from "../../../../commons/libraries/utils";
import IntroductionsUI from "./introductions.presenter";
import type { PaginationProps } from "antd";

const Introductions = (): JSX.Element => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getIntroductions = async (): Promise<void> => {
      const db = getFirestore(firebaseApp);
      const q = query(collection(db, "Introduction"));
      const querySnapshot = await getDocs(q);
      const sortedData = sortList(querySnapshot.docs).reverse();
      setData(sortedData);
    };
    void getIntroductions();
  }, []);

  const onClickCreate = (): void => {
    void router.push("/introduction/new");
  };

  const onChangePage: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
  };

  return (
    <IntroductionsUI
      data={data}
      currentPage={currentPage}
      onClickCreate={onClickCreate}
      onChangePage={onChangePage}
    />
  );
};

export default Introductions;
