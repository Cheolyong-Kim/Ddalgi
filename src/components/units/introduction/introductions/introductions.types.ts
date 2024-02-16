import type { DocumentData } from "@firebase/firestore-types";
import type { PaginationProps } from "antd";
import type { MouseEvent } from "react";

export interface IIntroductionsUIProps {
  data?: DocumentData[];
  currentPage?: number;
  onClickCreate: () => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
  onChangePage: PaginationProps["onChange"];
}
