import styled from "@emotion/styled";
import { css } from "@emotion/react";

import type { OtherCommentBtnProps } from "./Comments.types";

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const CommentsWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  width: 100%;
  height: 70px;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
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
  height: 100%;
`;

export const ProfileWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
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
  background-image: url(${(props: OtherCommentBtnProps) => props.img_src});
  cursor: pointer;
`;

export const CommentsPasswordInputWrap = styled.form`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
`;

export const CommentsPasswordInput = styled.input`
  width: 70px;
  height: 30px;
  margin-right: 5px;
  padding-left: 10px;
  border: none;
  border-bottom: 1px solid #bbbbbb;
  font-size: 14px;
  color: #404040;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    color: #bbbbbb;
  }
`;

export const CommentsDeleteBtn = styled.button`
  width: 35px;
  height: 25px;
  border: none;
  border-radius: 5px;
  background-color: #fe7488;
  font-size: 12px;
  color: white;
  cursor: pointer;
`;
