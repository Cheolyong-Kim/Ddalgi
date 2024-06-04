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
  ${flexRow};
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const InputForm = styled.form`
  position: relative;
  ${flexCol};
  align-items: flex-start;
  width: 1050px;
  padding-top: 20px;
`;

export const InputTitle = styled.h2`
  margin-bottom: 50px;
  font-size: 25px;
  color: #404040;
`;

export const InputWrap = styled.div`
  ${flexRow};
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  margin: 0 0 30px 30px;
`;

export const InputLabel = styled.span`
  font-size: 17px;
  color: #404040;
`;

export const InputBox = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  width: 65%;
`;

export const Input = styled.input`
  width: 65%;
  height: 30px;
  margin-bottom: 5px;
  padding-left: 5px;
  border: none;
  border-bottom: 1px solid #404040;
  font-size: 17px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const ErrorMessage = styled.span`
  margin-left: 10px;
  font-size: 17px;
  color: red;
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 300px;
  bottom: 0;
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #fe7488;
  font-size: 17px;
  color: white;
  cursor: pointer;
`;
