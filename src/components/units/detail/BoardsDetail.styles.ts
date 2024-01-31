import styled from "@emotion/styled";
import { css } from "@emotion/react";

import type {
  HeaderMenuAnchorImgProps,
  LikeNumColorProps,
} from "./BoardsDetail.types";

export const reset = css`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const MainWrap = styled.div`
  ${flexColumn};
  width: 1200px;
`;

export const PostWrap = styled.div`
  ${flexColumn};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 60px 80px;
  box-shadow: 3px 3px 5px rgba(225, 225, 225);
`;

export const PostHeader = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  margin-bottom: 90px;
  border-bottom: 1px solid #bdbdbd;
`;

export const HeaderProfile = styled.div`
  ${flexRow};
  align-items: center;
`;

export const ProfileImg = styled.a`
  display: block;
  width: 56px;
  height: 56px;
  margin-right: 13px;
  background-image: url("/boards/id/profile.png");
`;

export const ProfileWrap = styled.div`
  ${flexColumn};
`;

export const ProfileName = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

export const DateCreated = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #828282;
`;

export const HeaderMenu = styled.ul`
  ${flexRow};
  align-items: center;
`;

export const HeaderMenuLi = styled.li`
  list-style: none;

  &:first-child {
    margin-right: 20px;
  }
`;

export const HeaderMenuAnchor = styled.a`
  display: block;
  width: 32px;
  height: 32px;
  background-image: url(${(props: HeaderMenuAnchorImgProps) => props.img_src});
`;

export const PostContentsWrap = styled.div`
  ${flexColumn};
  align-items: center;
  width: 100%;
`;

export const ContentsWrap = styled.div`
  ${flexColumn};
  align-items: start;
  width: 100%;
  margin-bottom: 120px;
`;

export const ContentsTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const ContentsImg = styled.img`
  width: 100%;
  height: 480px;
  margin-bottom: 40px;
`;

export const Contents = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

export const YouTubeWrap = styled.div`
  margin-bottom: 140px;
`;

export const LikeBoxWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  width: 10%;
`;

export const LikeBox = styled.div`
  ${flexColumn};
  align-items: center;
  cursor: pointer;
`;

export const LikeImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const LikeNum = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: ${(props: LikeNumColorProps) => (props.type ? "#FFD600" : "#828282")};
`;

export const MenuWrap = styled.div`
  ${flexColumn};
  align-items: center;
  width: 100%;
  padding-bottom: 100px;
  margin-top: 100px;
  border-bottom: 1px solid #bdbdbd;
`;

export const Menu = styled.ul`
  ${flexRow};
  justify-content: space-between;
  width: 50%;
`;
export const MenuLi = styled.li`
  list-style: none;
  color: black;
`;

export const MenuLiAnchor = styled.a`
  display: block;
  width: 180px;
  height: 45px;
  border: 1px solid #bdbdbd;
  color: black;
  text-align: center;
  line-height: 45px;
  text-decoration: none;
`;
