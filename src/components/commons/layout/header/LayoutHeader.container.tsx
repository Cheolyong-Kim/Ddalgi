import { useRouter } from "next/router";
import { useState } from "react";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import type { INavigationMenu } from "./LayoutHeader.types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { FETCH_USER_LOGGEDIN } from "../../../../commons/queries";
import type { IQuery } from "../../../../commons/types/generated/types";
import { useQuery } from "@apollo/client";

const LayoutHeader = (): JSX.Element => {
  const [selectedMenu, setSelectedMenu] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);

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

  const onClickProfile = (): void => {
    setIsClicked((prev) => !prev);
  };

  const onClickMypage = (): void => {
    void router.push("/mypage");
  };

  const onClickLogout = (): void => {
    setAccessToken("");
    localStorage.removeItem("accessToken");
    setIsClicked(false);
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickLink={onClickLink}
      onClickLogin={onClickLogin}
      onClickProfile={onClickProfile}
      onClickMypage={onClickMypage}
      onClickLogout={onClickLogout}
      selectedMenu={selectedMenu}
      isClicked={isClicked}
      data={data}
    />
  );
};

export default LayoutHeader;
