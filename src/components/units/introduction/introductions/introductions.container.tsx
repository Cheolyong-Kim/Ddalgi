import {
  getFirestore,
  query,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { type MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { sortList } from "../../../../commons/libraries/utils";
import IntroductionsUI from "./introductions.presenter";
import type { PaginationProps } from "antd";

const Introductions = (): JSX.Element => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataChange, setDataChange] = useState(false);

  const db = getFirestore(firebaseApp);

  useEffect(() => {
    const getIntroductions = async (): Promise<void> => {
      const q = query(collection(db, "Introduction"));
      const querySnapshot = await getDocs(q);
      const sortedData = sortList(querySnapshot.docs).reverse();
      setData(sortedData);
    };
    void getIntroductions();
  }, [dataChange]);

  const onClickCreate = (): void => {
    void router.push("/introduction/new");
  };

  const onClickUpdate = (event: MouseEvent<HTMLButtonElement>): void => {
    void router.push(`/introduction/${event.currentTarget.id}/edit`);
  };

  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    console.log(event.currentTarget.id);
    await deleteDoc(doc(db, "Introduction", event.currentTarget.id));

    setDataChange((prev) => !prev);
  };

  const onChangePage: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
  };

  return (
    <IntroductionsUI
      data={data}
      currentPage={currentPage}
      onClickCreate={onClickCreate}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
      onChangePage={onChangePage}
    />
  );
};

export default Introductions;
