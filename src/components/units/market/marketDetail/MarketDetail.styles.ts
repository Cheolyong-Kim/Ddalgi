import styled from "@emotion/styled";
import { css } from "@emotion/react";

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

const flexCol = css`
  display: flex;
  flex-direction: column;
`;

export const MainWrap = styled.section`
  ${flexCol};
  width: 1200px;
  padding-bottom: 30px;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 30px;
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

export const Name = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

export const ProfileWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
`;

export const ProfileInfoWrap = styled.div`
  ${flexCol};
  align-items: end;
`;

export const ProfileName = styled.span`
  margin-bottom: 5px;
  font-size: 20px;
`;

export const CreatedAt = styled.span`
  font-size: 14px;
  color: #bbbbbb;
`;

export const UpdateButton = styled.a`
  margin-left: 7px;
  padding-left: 7px;
  border-left: 1px solid #404040;
  font-size: 14px;
  color: #404040;
  cursor: pointer;
`;

export const deleteButton = styled.button`
  margin-left: 7px;
  padding-left: 7px;
  border: none;
  border-left: 1px solid #404040;
  background-color: transparent;
  font-size: 14px;
  color: #404040;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 65px;
  height: 65px;
  margin-left: 10px;
`;

export const PostWrap = styled.div`
  ${flexCol};
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Contents = styled.p`
  font-size: 22px;
  margin-bottom: 80px;
`;

export const ButButtonWrap = styled.div`
  ${flexRow};
  justify-content: end;
  align-items: flex-end;
  width: 80%;
  margin-bottom: 20px;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
`;

export const BuyButton = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #fe7488;
  font-size: 16px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export const LikeWrap = styled.div`
  ${flexCol};
  align-items: center;
  margin: 80px 0 40px 0;
`;

export const LikeImg = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const LikeNum = styled.span`
  font-size: 18px;
  color: #606060;
`;

export const TagWrap = styled.div`
  ${flexRow};
  justify-content: start;
  width: 80%;
`;

export const Tag = styled.p`
  font-size: 15px;
  color: #bdbdbd;
`;
