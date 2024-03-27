import type { DocumentData } from "@firebase/firestore-types";

export interface INoticeNewData {
  title: string;
  contents: string;
}

export interface INoticeNewProps {
  data?: DocumentData;
  isEdit?: boolean;
}

export interface IUpdateNoticeInputProps {
  title?: string;
  contents?: string;
  images?: string[];
}
