import type { PaginationProps } from "antd";
import type { MouseEvent } from "react";

export interface IIntroductionsUIProps {
  data?: any;
  currentPage?: number;
  onClickCreate: () => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
  onChangePage: PaginationProps["onChange"];
}
