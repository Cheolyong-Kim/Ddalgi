import type { ChangeEvent, MouseEvent, RefObject } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  images?: string[];
}

export interface IBoardsNewProps {
  nameError: string;
  pwdError: string;
  titleError: string;
  contentError: string;
  btnDisable: boolean;
  images: string[];
  imageFileRef: RefObject<HTMLInputElement>;
  imageFileUpdateRef: RefObject<null[] | HTMLInputElement[]>;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePwd: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCancleBtn: () => void;
  onClickSubmitBtn: () => void;
  onClickUpdate: () => void;
  onChangeImage: (event: ChangeEvent<HTMLInputElement>) => void;
  onUpdateImage: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onClickUploadImage: () => void;
  onClickUpdateImage: (event: MouseEvent<HTMLImageElement>) => void;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBasicInputProps {
  isNonMember?: boolean;
}
