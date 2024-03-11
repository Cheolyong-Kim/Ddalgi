import { useRecoilState } from "recoil";
import * as H from "./LayoutHeader.styles";
import type { ILayoutHeaderUIProps } from "./LayoutHeader.types";
import { accessTokenState } from "../../../../commons/stores";

const NAVIGATION_MENUS = [
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/markets" },
  { name: "공지사항", page: "/notice" },
];

const LayoutHeaderUI = (props: ILayoutHeaderUIProps): JSX.Element => {
  console.log(props.isClicked);
  const [accessToken] = useRecoilState(accessTokenState);

  return (
    <H.Header>
      <H.ContentsWrap>
        <H.NavWrap>
          <H.Logo onClick={props.onClickLogo}>
            <H.LogoImg src="/header/logo.png" />
          </H.Logo>
          <H.Nav>
            <H.NavUl>
              {NAVIGATION_MENUS.map((menu) => (
                <H.NavLi key={menu.page}>
                  <H.NavLink
                    onClick={props.onClickLink(menu)}
                    style={{
                      color:
                        props.selectedMenu === menu.name
                          ? "#fe7488"
                          : "#404040",
                      fontWeight:
                        props.selectedMenu === menu.name ? "bold" : "400",
                    }}
                  >
                    {menu.name}
                  </H.NavLink>
                </H.NavLi>
              ))}
            </H.NavUl>
          </H.Nav>
        </H.NavWrap>
        {accessToken ? (
          <>
            <H.HeaderProfileWrap>
              <H.HeaderProfileImg
                src="/boards/id/profile.png"
                onClick={props.onClickProfile}
              />
              <H.HeaderProfileNavWrap isClicked={props.isClicked}>
                <H.HeaderProfileInfoWrap>
                  <H.HeaderProfileImg
                    src={
                      props.data?.fetchUserLoggedIn.picture ??
                      "/boards/id/profile.png"
                    }
                  />
                  <H.HeaderProfileNickNameWrap>
                    <H.HeaderProfileNickName>
                      {props.data?.fetchUserLoggedIn.name}
                    </H.HeaderProfileNickName>
                    <H.HeaderProfilePoint>
                      {props.data?.fetchUserLoggedIn.userPoint?.amount}P
                    </H.HeaderProfilePoint>
                  </H.HeaderProfileNickNameWrap>
                </H.HeaderProfileInfoWrap>
                <H.HeaderProfileUl>
                  <H.HeaderProfileLi onClick={props.onClickMypage}>
                    마이페이지
                  </H.HeaderProfileLi>
                  <H.HeaderProfileLi onClick={props.onClickLogout}>
                    로그아웃
                  </H.HeaderProfileLi>
                </H.HeaderProfileUl>
              </H.HeaderProfileNavWrap>
            </H.HeaderProfileWrap>
          </>
        ) : (
          <>
            <H.HeaderButtonWrap>
              <H.HeaderButton onClick={props.onClickLogin}>
                로그인
              </H.HeaderButton>
            </H.HeaderButtonWrap>
          </>
        )}
      </H.ContentsWrap>
    </H.Header>
  );
};

export default LayoutHeaderUI;
