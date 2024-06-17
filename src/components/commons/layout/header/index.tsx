import { useRecoilState } from "recoil";
import * as H from "./LayoutHeader.styles";
import { accessTokenState, currentPageState } from "../../../../commons/stores";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { useQueryFetchUserLoggedIn } from "../../../../commons/hooks/useQuery";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useMutationLogOutUser } from "../../../../commons/hooks/useMutation";
import { useRouter } from "next/router";

const NAVIGATION_MENUS = [
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/markets" },
  { name: "공지사항", page: "/notice" },
];

const LayoutHeader = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  const router = useRouter();

  const { data, client } = useQueryFetchUserLoggedIn();
  const [logOutUser] = useMutationLogOutUser();
  const { onClickMoveToPage } = useMoveToPage();

  const onClickLogout = (): void => {
    setAccessToken("");
    void client.clearStore();
    void logOutUser();
    setIsClicked(false);

    void router.push("/login");
  };

  useEffect(() => {
    setCurrentPage(router.pathname);
  }, [router.pathname]);

  return (
    <H.Header>
      <H.ContentsWrap>
        <H.NavWrap>
          <H.Logo onClick={onClickMoveToPage("/markets")}>
            <H.LogoImg src="/header/logo.png" />
          </H.Logo>
          <H.Nav>
            <H.NavUl>
              {NAVIGATION_MENUS.map((menu) => (
                <H.NavLi key={menu.page}>
                  <Link href={menu.page} passHref>
                    <H.NavLink isSelected={currentPage === menu.page}>
                      {menu.name}
                    </H.NavLink>
                  </Link>
                </H.NavLi>
              ))}
            </H.NavUl>
          </H.Nav>
        </H.NavWrap>
        {accessToken ? (
          <>
            <H.HeaderProfileWrap>
              <H.HeaderProfileImg
                src={
                  data?.fetchUserLoggedIn.picture
                    ? `http://storage.googleapis.com/${data.fetchUserLoggedIn.picture}`
                    : "/boards/id/profile.png"
                }
                onClick={() => {
                  setIsClicked((prev) => !prev);
                }}
              />
              <H.HeaderProfileNavWrap isClicked={isClicked}>
                <H.HeaderProfileInfoWrap>
                  <H.HeaderProfileImg
                    src={
                      data?.fetchUserLoggedIn.picture
                        ? `http://storage.googleapis.com/${data.fetchUserLoggedIn.picture}`
                        : "/boards/id/profile.png"
                    }
                  />
                  <H.HeaderProfileNickNameWrap>
                    <H.HeaderProfileNickName>
                      {data?.fetchUserLoggedIn.name}
                    </H.HeaderProfileNickName>
                    <H.HeaderProfilePoint>
                      {data?.fetchUserLoggedIn.userPoint?.amount}P
                    </H.HeaderProfilePoint>
                  </H.HeaderProfileNickNameWrap>
                </H.HeaderProfileInfoWrap>
                <H.HeaderProfileUl>
                  <H.HeaderProfileLi>
                    <Link href="/mypage/mymarket">
                      <H.HeaderProfileLiAnchor
                        onClick={() => setIsClicked(false)}
                      >
                        마이페이지
                      </H.HeaderProfileLiAnchor>
                    </Link>
                  </H.HeaderProfileLi>
                  <H.HeaderProfileLi onClick={onClickLogout}>
                    로그아웃
                  </H.HeaderProfileLi>
                </H.HeaderProfileUl>
              </H.HeaderProfileNavWrap>
            </H.HeaderProfileWrap>
          </>
        ) : (
          <>
            <H.HeaderButtonWrap>
              <H.HeaderButton onClick={onClickMoveToPage("/login")}>
                로그인
              </H.HeaderButton>
            </H.HeaderButtonWrap>
          </>
        )}
      </H.ContentsWrap>
    </H.Header>
  );
};

export default LayoutHeader;
