import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type {
  IIntroductionInputWrapProps,
  IIntroductionSubmitButtonProps,
} from "./introductionNew.types";

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

const flexCol = css`
  display: flex;
  flex-direction: column;
`;

export const MainWrap = styled.div`
  position: relative;
  ${flexCol};
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  padding: 0 100px 0;
`;

export const IntroductionPersonalInfoWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  width: 100%;
`;

export const IntroductionInputWrap = styled.div`
  ${flexCol};
  width: ${(props: IIntroductionInputWrapProps) =>
    props.isPI ? "49%" : "100%"};
  margin-bottom: 30px;
`;

export const IntroductionSpan = styled.span`
  display: block;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 600;
`;

export const IntroductionInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 15px;
  border: 1px solid #bdbdbd;
  background-color: white;
  font-size: 16px;

  &::placeholder {
    font-size: 16px;
    color: #c4c4c4;
  }
`;

export const IntroductionTextArea = styled.textarea`
  height: 200px;
  padding: 15px;
  border: 1px solid #bdbdbd;
  background-color: white;
  font-size: 16px;
  resize: none;

  &::placeholder {
    font-size: 16px;
    color: #c4c4c4;
  }
`;

export const IntroductionSubmitButton = styled.button`
  position: absolute;
  right: 100px;
  bottom: -30px;
  width: 145px;
  height: 40px;
  border: none;
  background-color: ${(props: IIntroductionSubmitButtonProps) =>
    props.isButtonAble ? "#ffd600" : "#BDBDBD"};
  font-size: 16px;
  cursor: ${(props: IIntroductionSubmitButtonProps) =>
    props.isButtonAble ? "pointer" : "auto"};
`;
