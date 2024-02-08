import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardsDetailProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickDelete: () => void;
  onClickUpdate: () => void;
  onClickMove: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}

export interface HeaderMenuAnchorImgProps {
  img_src: string;
}

export interface LikeNumColorProps {
  type: boolean;
}
