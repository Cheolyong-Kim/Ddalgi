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

export const MainWrap = styled.div`
  ${flexCol};
  justify-content: space-between;
  width: 1200px;
  padding: 0 0 30px 0;
`;

export const BasicInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 0 0 15px;
  border: none;
  background-color: white;
  font-size: 25px;

  &::placeholder {
    font-size: 25px;
    color: #bbbbbb;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #404040;
  }
`;

export const PostTitleWrap = styled.div`
  margin-bottom: 15px;
`;

export const PostContentWrap = styled.div`
  margin-bottom: 15px;
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 480px;
  padding: 15px 0 0 15px;
  border: 1px solid #bbbbbb;
  margin-bottom: 5px;
  font-size: 20px;
  resize: none;

  &::placeholder {
    font-size: 25px;
    color: #c4c4c4;
  }

  &:focus {
    outline: none;
  }
`;

export const AttachImageWrap = styled.div`
  margin-bottom: 40px;
`;

export const AttachBtnsWrap = styled.div`
  ${flexRow};
  justify-content: left;
  width: 70%;
`;

export const AttachBtnWrap = styled.div`
  margin-right: 15px;
`;

export const UploadImg = styled.img`
  position: relative;
  width: 78px;
  height: 78px;
  margin-right: 30px;
  cursor: pointer;

  &: hover {
    filter: blur(2px);
  }
`;

export const AttachBtn = styled.img`
  width: 78px;
  height: 78px;
  border: none;
  cursor: pointer;
`;

export const AttachInput = styled.input`
  display: none;
`;

export const SubmitBtnWrap = styled.div`
  ${flexRow};
  justify-content: right;
`;

export const CancleBtn = styled.button`
  width: 80px;
  height: 50px;
  margin-right: 20px;
  padding: 0;
  border: 1px solid #404040;
  border-radius: 10px;
  background: white;
  font-size: 16px;
  cursor: pointer;
`;

export const SubmitBtn = styled.button`
  width: 80px;
  height: 50px;
  padding: 0;
  border: none;
  border-radius: 10px;
  background: #fe7488;
  font-size: 16px;
  color: white;
  cursor: pointer;

  &:disabled {
    background: #bbbbbb;
    color: #404040;
    cursor: auto;
  }
`;
