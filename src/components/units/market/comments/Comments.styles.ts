import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { CommentsBtnProps } from "./Comments.types";

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
  align-items: flex-end;
  width: 1200px;
`;

export const CommentsWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding-bottom: 30px;
`;

export const CommentsContentsWrap = styled.div`
  ${flexRow};
  justify-content: flex-start;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 54px;
  height: 54px;
  margin-right: 10px;
`;

export const CommentsDetailWrap = styled.div`
  ${flexColumn};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const ProfileWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
`;

export const ProfileName = styled.span`
  margin-right: 10px;
  font-size: 16px;
  color: #404040;
`;

export const Created = styled.span`
  font-size: 12px;
  color: #bbbbbb;
`;

export const Contents = styled.p`
  font-size: 16px;
  color: #404040;
`;

export const CommentsUtilWrap = styled.div`
  ${flexColumn};
  justify-content: flex-start;
  width: 4.5%;
`;

export const CommentsBtnsWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
`;

export const CommentsBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  background-image: url(${(props: CommentsBtnProps) => props.img_src});
  cursor: pointer;
`;

export const AnswerBtn = styled.button`
  width: 22px;
  height: 22px;
  margin-left: 26px;
  border: none;
  background: none;
  background-image: url("/markets/답글버튼.png");
  background-size: cover;
  cursor: pointer;
`;

export const AnswersWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  width: 98%;
`;

export const AnswersArrow = styled.img`
  width: 22px;
  height: 26px;
  margin-right: 20px;
`;
