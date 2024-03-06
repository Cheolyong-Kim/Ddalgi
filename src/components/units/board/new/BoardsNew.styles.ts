import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { IBasicInputProps } from "./BoardsNew.types";

export const reset = css`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

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

export const UserInputWrap = styled.div`
  ${flexRow};
  width: 20%;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const UserInputFormWrap = styled.div`
  width: calc(50% - 15px);
`;

export const InputName = styled.div`
  display: block;
  margin-bottom: 15px;
  font-size: 16px;
  color: #404040;
`;

export const BasicInput = styled.input`
  width: 100%;
  height: ${(props: IBasicInputProps) => (props.isNonMember ? "30px" : "50px")};
  padding: 0 0 0 15px;
  border: none;
  background-color: white;
  font-size: ${(props: IBasicInputProps) =>
    props.isNonMember ? "18px" : "25px"};

  &::placeholder {
    font-size: ${(props: IBasicInputProps) =>
      props.isNonMember ? "18px" : "25px"};
    color: #bbbbbb;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #404040;
  }
`;

export const ErrorBox = styled.div`
  font-size: 14px;
  color: red;
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

export const YoutubeInputWrap = styled.div`
  margin-bottom: 15px;
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

export const SettingWrap = styled.div`
  margin-bottom: 80px;
`;

export const CheckBoxWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  width: 15%;
`;

export const SettingCheckLabel = styled.label`
  font-size: 16px;
  font-weight: 500;

  &::before {
    content: "";
    box-sizing: border-box;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    border: 1px solid black;
    border-radius: 50%;
    vertical-align: -3px;
  }
`;

export const SettingCheckBox = styled.input`
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
