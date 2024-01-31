import type { MouseEvent } from "react";

export interface ILayoutNavProps {
  onClickLink: (event: MouseEvent<HTMLAnchorElement>) => void;
}
