import { useRouter } from "next/router";
import { useState } from "react";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import type { INavigationMenu } from "./LayoutHeader.types";

const LayoutHeader = (): JSX.Element => {
  const [selectedMenu, setSelectedMenu] = useState("");

  const router = useRouter();

  const onClickLogo = (): void => {
    void router.push("/markets");
  };

  const onClickLink = (menu: INavigationMenu) => (): void => {
    void router.push(menu.page);
    setSelectedMenu(menu.name);
  };

  const onClickLogin = (): void => {
    void router.push("/login");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickLink={onClickLink}
      onClickLogin={onClickLogin}
      selectedMenu={selectedMenu}
    />
  );
};

export default LayoutHeader;
