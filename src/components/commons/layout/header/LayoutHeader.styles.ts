import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const flexRow = css`
  display: flex;
  flex-direction: row;
`;

export const flexCol = css`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  ${flexRow}
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: white;
  z-index: 1;
`;

export const ContentsWrap = styled.div`
  ${flexRow}
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  padding:;
`;

export const NavWrap = styled.div`
  ${flexRow};
  justify-content: left;
  align-items: center;
  color: #404040;
`;

export const Logo = styled.a`
  margin-right: 30px;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 90px;
  height: 50px;
`;

export const Nav = styled.nav`
  ${flexRow}
  justify-content: space-between;
  align-items: center;
`;

export const NavUl = styled.ul`
  ${flexRow}
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const NavLi = styled.li`
  margin-right: 30px;
  font-size: 17px;
`;

export const NavLink = styled.a`
  cursor: pointer;
`;

export const HeaderButtonWrap = styled.div`
  ${flexRow}
  justify-content: space-between;
  align-items: center;
`;

export const HeaderButton = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: #fe7488;
  font-size: 14px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;
