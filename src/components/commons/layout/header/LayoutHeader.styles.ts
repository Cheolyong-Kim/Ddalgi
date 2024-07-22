import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { IHeaderProfileNavProps } from "./LayoutHeader.types";

interface INavMenuProps {
  isSelected: boolean;
}

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
  z-index: 11;
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
  text-decoration: none;
  font-weight: ${(props: INavMenuProps) => (props.isSelected ? "bold" : "400")};
  color: ${(props) => (props.isSelected ? "#fe7488" : "#404040")};
  cursor: pointer;
`;

export const HeaderProfileWrap = styled.div`
  ${flexCol};
  position: relative;
`;

export const HeaderProfileImg = styled.img`
  width: 54px;
  height: 54px;
  cursor: pointer;
`;

export const HeaderProfileNavWrap = styled.div`
  display: ${(props: IHeaderProfileNavProps) =>
    props.isClicked ? "block" : "none"};
  position: absolute;
  right: 0;
  bottom: -150px;
  width: 200px;
  padding: 10px 0 0 0;
  border-radius: 10px;
  background-color: white;
`;

export const HeaderProfileInfoWrap = styled.div`
  ${flexRow};
  align-items: center;
  margin: 0 0 10px 0;
  padding: 0 0 5px 10px;
  border-bottom: 1px solid #404040;
`;

export const HeaderProfileNickNameWrap = styled.div`
  ${flexCol};
  margin-left: 5px;
`;

export const HeaderProfileNickName = styled.span`
  margin-bottom: 3px;
  font-size: 16px;
  font-weight: bold;
  color: #404040;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const HeaderProfilePoint = styled.span`
  font-size: 12px;
  color: #404040;
`;

export const HeaderProfileUl = styled.ul`
  list-style: none;
`;

export const HeaderProfileLi = styled.li`
  padding: 0 0 10px 20px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 10px;
  font-size: 14px;
  color: #bbbbbb;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

export const HeaderProfileLiAnchor = styled.a`
  text-decoration: none;
`;

export const HeaderButtonWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
`;

export const HeaderButton = styled.a`
  ${flexRow};
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: #fe7488;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  line-height: -14px;
  color: white;
  cursor: pointer;
`;
