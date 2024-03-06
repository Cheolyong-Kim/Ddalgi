import styled from "@emotion/styled";
import { css } from "@emotion/react";

import type { OtherCommentBtnProps } from "./Other_comment.types";

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const OtherCommentWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  width: 100%;
  height: 70px;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const OtherComment = styled.div`
  ${flexRow};
  justify-content: flex-start;
  align-items: center;
`;

export const OtherCommentProfileImg = styled.img`
  width: 54px;
  height: 54px;
  margin-right: 10px;
`;

export const OtherCommentDetailWrap = styled.div`
  ${flexColumn};
  justify-content: space-between;
  height: 100%;
`;

export const OtherCommentProfile = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const OtherCommentProfileName = styled.span`
  margin-right: 10px;
  font-size: 16px;
  color: #404040;
`;

export const OtherCommentContents = styled.p`
  font-size: 16px;
  color: #404040;
`;

export const OtherCommentCreated = styled.span`
  font-size: 12px;
  color: #bbbbbb;
`;

export const OtherCommentRight = styled.div`
  ${flexColumn};
  justify-content: flex-start;
  width: 4.5%;
`;

export const OtherCommentBtnWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
`;

export const OtherCommentBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  background-image: url(${(props: OtherCommentBtnProps) => props.img_src});
  cursor: pointer;
`;
