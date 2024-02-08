import { Nav, NavLi, NavLink, NavUl } from "./LayoutNav.styles";
import type { ILayoutNavProps } from "./LayoutNav.types";

const NAVIGATION_MENUS = [
  { name: "자기소개게시판", page: "/introduction/new" },
  { name: "랜덤고양이", page: "/cats" },
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/markets" },
  { name: "마이페이지", page: "/mypage" },
];

const LayoutNavUI = (props: ILayoutNavProps): JSX.Element => {
  return (
    <Nav>
      <NavUl>
        {NAVIGATION_MENUS.map((el) => (
          <NavLi key={el.page}>
            <NavLink id={el.page} onClick={props.onClickLink}>
              {el.name}
            </NavLink>
          </NavLi>
        ))}
      </NavUl>
    </Nav>
  );
};

export default LayoutNavUI;
