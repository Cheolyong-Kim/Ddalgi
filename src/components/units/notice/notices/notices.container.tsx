import { useRouter } from "next/router";
import { type ChangeEvent, useEffect, useState } from "react";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { getFirestore, query, collection, getDocs } from "firebase/firestore";
import type { DocumentData } from "@firebase/firestore-types";
import { sortList } from "../../../../commons/libraries/utils";
import * as _ from "lodash";
import NoticeUI from "./notices.presenter";

const Notices = (): JSX.Element => {
  const [data, setData] = useState<DocumentData[]>([]);
  const [dataCopy, setDataCopy] = useState<DocumentData[]>([]);
  const [startPage, setStartPage] = useState(1);
  const [activatedPage, setActivatedPage] = useState(1);
  const [isSearch, setIsSearch] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [searchDate, setSearchDate] = useState<string[]>([""]);

  const router = useRouter();

  const db = getFirestore(firebaseApp);

  const lastPage = Math.ceil(dataCopy?.length / 10);

  const slicedData = dataCopy.slice(
    0 + 10 * (activatedPage - 1),
    10 + 10 * (activatedPage - 1),
  );

  useEffect(() => {
    const getNotice = async (): Promise<void> => {
      const q = query(collection(db, "Notice"));
      const querySnapshot = await getDocs(q);
      const sortedData = sortList(querySnapshot.docs).reverse();
      setData(sortedData);
      setDataCopy([...sortedData]);
    };
    void getNotice();
  }, []);

  const onClickTitle = (id: string) => (): void => {
    void router.push(`/notice/${id}`);
  };

  const onClickNewButton = (): void => {
    void router.push("notice/new");
  };

  const onClickPrev = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 5);
    setActivatedPage(startPage - 5);
  };

  const onClickNext = (): void => {
    if (startPage + 5 <= lastPage) {
      setStartPage(startPage + 5);
      setActivatedPage(startPage + 5);
    }
  };

  const onClickPage = (page: number) => () => {
    setActivatedPage(page);
  };

  const onChangeSearchWord = _.debounce(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setSearchWord(event.target.value);
    },
    200,
  );

  const onChangeSearchDate = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchDateInput = event.target.value.replaceAll(".", "-").split("~");
    setSearchDate(searchDateInput);
  };

  const onClickSearchButton = (): void => {
    if (!searchWord && searchDate.includes("")) {
      setDataCopy(data);
      setIsSearch(false);
    }

    if (searchWord && searchDate.includes("")) {
      const newData = data.filter((el) => el.data().title.includes(searchWord));

      setDataCopy(newData);
      setIsSearch(true);
    }

    if (!searchWord && !searchDate.includes("")) {
      const newData = data.filter(
        (el) =>
          new Date(el.data().createdAt) >= new Date(searchDate[0]) &&
          new Date(el.data().createdAt) <= new Date(searchDate[1]),
      );

      setDataCopy(newData);
      setIsSearch(true);
    }

    if (searchWord && !searchDate.includes("")) {
      const newData = data
        .filter((el) => el.data().title.includes(searchWord))
        .filter(
          (el) =>
            new Date(el.data().createdAt) >= new Date(searchDate[0]) &&
            new Date(el.data().createdAt) <= new Date(searchDate[1]),
        );

      setDataCopy(newData);
      setIsSearch(true);
    }
  };

  return (
    <NoticeUI
      data={slicedData}
      onClickTitle={onClickTitle}
      onClickNewButton={onClickNewButton}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      onClickPage={onClickPage}
      onChangeSearchWord={onChangeSearchWord}
      onChangeSearchDate={onChangeSearchDate}
      onClickSearchButton={onClickSearchButton}
      startPage={startPage}
      lastPage={lastPage}
      activatedPage={activatedPage}
      searchWord={searchWord}
      isSearch={isSearch}
    />
  );
};

export default Notices;
