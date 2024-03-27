import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardsNewData {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
  youtubeUrl?: string;
}

export interface IBoardsNewProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBasicInputProps {
  isNonMember?: boolean;
}
