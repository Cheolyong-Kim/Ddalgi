import styled from "@emotion/styled";
import type { ILoginButtonProps } from "./Login.types";

export const MainWarp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 1200px;
  margin-bottom: 20px;
`;

export const LoginTitle = styled.h1`
  display: inline-block;
  margin-bottom: 30px;
  font-size: 30px;
  color: #404040;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  padding: 0 0 0 50px;
`;

export const LoginInput = styled.input`
  width: 60%;
  height: 30px;
  margin-bottom: 5px;
  padding: 5px 0 5px 10px;
  border: none;
  border-bottom: 1px solid #404040;
  background: white;
  font-size: 18px;
  color: #404040;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #bbbbbb;
  }
`;

export const ErrorSpan = styled.span`
  margin-bottom: 20px;
  padding-left: 10px;
  font-size: 14px;
  color: red;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 70%;
  margin-top: 20px;
`;

export const LoginButton = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 15px;
  border: ${(props: ILoginButtonProps) =>
    props.isLoginBtn ? "none" : "1px solid #404040"};
  border-radius: 10px;
  background-color: ${(props: ILoginButtonProps) =>
    props.isLoginBtn ? "#fe7488" : "white"};
  font-size: 16px;
  color: ${(props: ILoginButtonProps) =>
    props.isLoginBtn ? "white" : "1px solid #404040"};
  cursor: pointer;
`;
