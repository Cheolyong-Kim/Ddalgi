import type { DocumentData } from "@firebase/firestore-types";
import type { Dispatch, SetStateAction } from "react";

export interface ISearchBarFBProps {
  data: DocumentData[];
  setDataCopy: Dispatch<SetStateAction<DocumentData[]>>;
  setIsSearch: Dispatch<SetStateAction<boolean>>;
  setKeyword: Dispatch<SetStateAction<string>>;
}

export interface ISearchBarData {
  searchWord: string;
  searchDate: string;
}
