import styled from "@emotion/styled";
import { css } from "@emotion/react";

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
  margin-bottom: 10px;
  padding-bottom: 30px;
  border-bottom: 1px solid #bbbbbb;
`;

export const PostHeader = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  padding-bottom: 5px;
  border-bottom: 1px solid #bbbbbb;
`;

export const HeaderProfile = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ContentsTitle = styled.h1`
  font-size: 35px;
  font-weight: bold;
`;

export const InfoWrap = styled.div`
  ${flexRow}
  align-items: center;
`;

export const ProfileWrap = styled.div`
  ${flexColumn};
  align-items: end;
`;

export const ProfileName = styled.span`
  margin-bottom: 5px;
  font-size: 20px;
`;

export const UtilsWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
`;

export const DateCreated = styled.span`
  font-size: 14px;
  color: #bbbbbb;
`;

export const Util = styled.span`
  margin-left: 7px;
  padding-left: 7px;
  border-left: 1px solid #404040;
  font-size: 14px;
  color: #404040;
  cursor: pointer;
`;

export const ProfileImg = styled.a`
  display: block;
  width: 65px;
  height: 65px;
  margin-left: 10px;
  background-image: url("/boards/id/profile.png");
  background-size: cover;
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
  margin-bottom: 60px;
`;

export const ContentsImgWrap = styled.div`
  ${flexColumn}
  align-items: center;
  width: 100%;
`;

export const ContentsImg = styled.img`
  margin-bottom: 40px;
`;

export const Contents = styled.span`
  font-size: 18px;
  color: #404040;
`;
