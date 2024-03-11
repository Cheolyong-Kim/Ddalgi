import type { IQuery } from "../../../../commons/types/generated/types";

export interface INavigationMenu {
  name: string;
  page: string;
}

export interface ILayoutHeaderUIProps {
  onClickLogo: () => void;
  onClickLink: (menu: INavigationMenu) => () => void;
  onClickLogin: () => void;
  onClickProfile: () => void;
  onClickMypage: () => void;
  onClickLogout: () => void;
  selectedMenu: string;
  isClicked: boolean;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
}

export interface IHeaderProfileNavProps {
  isClicked: boolean;
}
