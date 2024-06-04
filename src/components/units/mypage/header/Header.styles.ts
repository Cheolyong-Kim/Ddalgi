import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface INavMenuProps {
  isSelected: boolean;
}

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

const flexCol = css`
  display: flex;
  flex-direction: column;
`;

export const MainWrap = styled.aside`
  ${flexCol};
  justify-content: space-between;
  width: 200px;
  height: 320px;
  margin-right: 30px;
`;

export const Title = styled.h1`
  display: block;
  font-size: 30px;
  color: #404040;
  margin-bottom: 40px;
`;

export const ProfileWrap = styled.div`
  position: relative;
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const ProfileNameWrap = styled.div`
  ${flexCol};
  justify-content: space-between;
`;

export const ProfileName = styled.span`
  padding-left: 18px;
  margin-bottom: 5px;
  font-size: 18px;
  color: #404040;
`;

export const PointDeco = styled.span`
  padding: 0 5px 0 15px;
  font-size: 17px;
  color: #fe7488;
`;

export const Point = styled.span`
  font-size: 16px;
  color: #404040;
`;

export const ProfileImg = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 15px;
`;

export const ProfileUploadWrap = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
`;

export const ProfileImgUploadButton = styled.button`
  width: 23px;
  height: 23px;
  border: none;
  border-radius: 50%;
  background-color: #fe7488;
  background-image: url("/markets/톱니바퀴.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

export const ProfileImgInput = styled.input`
  display: none;
`;

export const Nav = styled.nav`
  ${flexCol};
  justify-content: space-between;
`;

export const NavMenu = styled.a`
  padding-left: 15px;
  margin-bottom: 25px;
  font-size: 18px;
  font-weight: ${(props: INavMenuProps) =>
    props.isSelected ? "bold" : "normal"};
  color: ${(props) => (props.isSelected ? "#fe7488" : "#404040")};

  text-decoration: none;
`;
