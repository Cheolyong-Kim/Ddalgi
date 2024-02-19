import type { ChangeEvent, MouseEvent, RefObject } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";
import type { Address } from "react-daum-postcode";

export interface BoardAddressInput {
  zipcode: string;
  address: string;
  addressDetail: string;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: BoardAddressInput;
  images?: string[];
}

export interface IBoardsNewProps {
  nameError: string;
  pwdError: string;
  titleError: string;
  contentError: string;
  btnDisable: boolean;
  zipcode: string;
  address: string;
  images: string[];
  imageFileRef: RefObject<HTMLInputElement>;
  imageFileUpdateRef: RefObject<null[] | HTMLInputElement[]>;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePwd: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmitBtn: () => void;
  onClickUpdate: () => void;
  onChangeImage: (event: ChangeEvent<HTMLInputElement>) => void;
  onUpdateImage: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onClickUploadImage: () => void;
  onClickUpdateImage: (event: MouseEvent<HTMLImageElement>) => void;
  onToggleModal: () => void;
  handleComplete: (data: Address) => void;
  isEdit: boolean;
  isModalOpen: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
