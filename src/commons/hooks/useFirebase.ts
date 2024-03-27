import type { DocumentData } from "@firebase/firestore-types";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { firebaseApp } from "../libraries/firebase";
import { sortList } from "../libraries/utils";

interface IQueryDocs {
  data: DocumentData[];
  dataCopy: DocumentData[];
  setData: Dispatch<SetStateAction<DocumentData[]>>;
  setDataCopy: Dispatch<SetStateAction<DocumentData[]>>;
}

interface IQueryDoc {
  data: DocumentData | undefined;
  setData: Dispatch<SetStateAction<DocumentData>>;
}

export const useQueryDocs = (collectionName: string): IQueryDocs => {
  const [data, setData] = useState<DocumentData[]>([]);
  const [dataCopy, setDataCopy] = useState<DocumentData[]>([]);

  const db = getFirestore(firebaseApp);

  useEffect(() => {
    const getCollection = async (): Promise<void> => {
      const q = query(collection(db, collectionName));
      const querySnapshot = await getDocs(q);
      const sortedData = sortList(querySnapshot.docs).reverse();
      setData(sortedData);
      setDataCopy([...sortedData]);
    };
    void getCollection();
  }, []);

  return { data, dataCopy, setData, setDataCopy };
};

export const useQueryDoc = (collectionName: string, id: string): IQueryDoc => {
  const [data, setData] = useState<DocumentData>();

  const db = getFirestore(firebaseApp);

  useEffect(() => {
    const getNoticeDetail = async (): Promise<void> => {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());
    };
    void getNoticeDetail();
  }, []);

  return { data, setData };
};
