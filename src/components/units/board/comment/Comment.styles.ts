import styled from "@emotion/styled";
import { css } from "@emotion/react";

import type { ReviewContentsSubmitBtnProps } from "./Comment.types";

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const CommentWrap = styled.div`
  ${flexColumn};
  width: 1200px;
  margin-top: 40px;
`;

export const ReviewWrap = styled.div`
  ${flexColumn};
  align-items: start;
  width: 100%;
  margin-bottom: 40px;
`;

export const ReviewTitleWrap = styled.div`
  ${flexRow};
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
`;

export const ReviewTitleImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const ReviewTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const ReviewInfoWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  width: 43%;
  margin-bottom: 25px;
`;

export const ReviewInfoInput = styled.input`
  width: 180px;
  height: 52px;
  padding: 0 0 0 20px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  color: #828282;
`;

export const ReviewRateWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
`;

export const ReviewContentsWrap = styled.div`
  ${flexColumn};
  width: 100%;
  position: relative;
`;

export const ReviewContents = styled.textarea`
  width: 100%;
  height: 161px;
  padding: 20px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
  resize: none;
`;

export const ReviewContentsLimit = styled.span`
  position: absolute;
  bottom: 17px;
  left: 23px;
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
`;

export const ReviewContentsSubmitBtn = styled.button`
  position: absolute;
  right: 1px;
  bottom: 1px;
  width: 91px;
  height: 52px;
  border: none;
  background: ${(props: ReviewContentsSubmitBtnProps) =>
    props.color ? "#FFD600" : "black"};
  font-size: 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;
`;
