import type { ChangeEvent } from "react";
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
}

export interface IBoardsNewProps {
  nameError: string;
  pwdError: string;
  titleError: string;
  contentError: string;
  btnDisable: boolean;
  zipcode: string;
  address: string;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePwd: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmitBtn: () => void;
  onClickUpdate: () => void;
  onToggleModal: () => void;
  handleComplete: (data: Address) => void;
  isEdit: boolean;
  isModalOpen: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
