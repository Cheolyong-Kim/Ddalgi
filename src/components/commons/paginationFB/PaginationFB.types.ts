import type { Dispatch, SetStateAction } from "react";

export interface IPaginationFBProps {
  lastPage: number;
  activatedPage: number;
  setActivatedPage: Dispatch<SetStateAction<number>>;
}
