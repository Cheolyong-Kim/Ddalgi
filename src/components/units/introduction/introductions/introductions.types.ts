import type { PaginationProps } from "antd";

export interface IIntroductionsUIProps {
  data?: any;
  currentPage?: number;
  onClickCreate: () => void;
  onChangePage: PaginationProps["onChange"];
}
