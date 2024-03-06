import * as H from "./LayoutHeader.styles";
import type { ILayoutHeaderUIProps } from "./LayoutHeader.types";

const NAVIGATION_MENUS = [
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/markets" },
  { name: "공지사항", page: "/notice" },
];

const LayoutHeaderUI = (props: ILayoutHeaderUIProps): JSX.Element => {
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
        <H.HeaderButtonWrap>
          <H.HeaderButton onClick={props.onClickLogin}>로그인</H.HeaderButton>
        </H.HeaderButtonWrap>
      </H.ContentsWrap>
    </H.Header>
  );
};

export default LayoutHeaderUI;
