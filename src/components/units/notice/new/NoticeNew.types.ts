import type { DocumentData } from "@firebase/firestore-types";
import type {
  ChangeEvent,
  MouseEvent,
  MutableRefObject,
  RefObject,
} from "react";

export interface INoticeNewProps {
  data?: DocumentData;
  isEdit?: boolean;
}

export interface INoticeNewUIProps {
  data?: DocumentData;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmitBtn: () => Promise<void>;
  onChangeImage: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onClickUploadImage: () => void;
  onClickUpdateImage: (event: MouseEvent<HTMLImageElement>) => void;
  onUpdateImage: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onClickCancleBtn: () => void;
  onClickUpdate: () => Promise<void>;
  btnDisable: boolean;
  images: string[];
  imageFileRef: RefObject<HTMLInputElement>;
  imageFileUpdateRef: MutableRefObject<null[] | HTMLInputElement[]>;
  isEdit?: boolean;
}

export interface IUpdateNoticeInputProps {
  title?: string;
  contents?: string;
  images?: string[];
}
