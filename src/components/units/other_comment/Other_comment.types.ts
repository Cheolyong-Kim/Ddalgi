import type { MouseEvent, Dispatch, SetStateAction, ChangeEvent } from "react";
import type { IBoardComment } from "../../../commons/types/generated/types";

export interface IOtherCommentParentProps {
  data: IBoardComment;
}

export interface IOtherCommentProps {
  data: IBoardComment;
  onClickUpdate: () => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onToggleModal: () => void;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  isEdit: boolean;
  isModalOpen: boolean;
}

export interface OtherCommentBtnProps {
  img_src: string;
}
