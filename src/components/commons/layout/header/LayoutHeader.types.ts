export interface INavigationMenu {
  name: string;
  page: string;
}

export interface ILayoutHeaderUIProps {
  onClickLogo: () => void;
  onClickLink: (menu: INavigationMenu) => () => void;
  onClickLogin: () => void;
  selectedMenu: string;
}
