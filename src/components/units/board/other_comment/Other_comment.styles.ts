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
  height: 120px;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const OtherComment = styled.div`
  ${flexRow};
  justify-content: flex-start;
  align-items: flex-start;
`;

export const OtherCommentProfileImg = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

export const OtherCommentDetailWrap = styled.div`
  ${flexColumn};
  justify-content: space-between;
  height: 100%;
`;

export const OtherCommentDetail = styled.div`
  ${flexColumn};
  justify-content: start;
`;

export const OtherCommentProfile = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  width: 104%;
  margin-bottom: 5px;
`;

export const OtherCommentProfileName = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const OtherCommentContents = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;

export const OtherCommentCreated = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #bdbdbd;
`;

export const OtherCommentRight = styled.div`
  ${flexColumn};
  justify-content: flex-start;
  width: 5%;
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
