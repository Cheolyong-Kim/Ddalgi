import type { ChangeEvent, MouseEvent, Dispatch, SetStateAction } from "react";
import type { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentParentProps {
  id?: string;
  data?: IBoardComment;
  isEdit: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}

export interface ICommentProps {
  id: string;
  rating: number;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  setRating: Dispatch<SetStateAction<number>>;
  onClickSubmit: () => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCancle: () => void;
  isEdit: boolean;
  data?: IBoardComment;
  inputs: { writer: string; password: string };
  contents: string;
}
