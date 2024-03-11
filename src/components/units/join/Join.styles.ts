import styled from "@emotion/styled";

export const MainWarp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 1200px;
  margin-bottom: 20px;
`;

export const JoinTitle = styled.h1`
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

export const JoinInput = styled.input`
  width: 60%;
  height: 30px;
  margin-bottom: 3px;
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

export const JoinInputError = styled.span`
  padding-left: 10px;
  font-size: 14px;
  color: red;
  margin-bottom: 25px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 70%;
  margin-top: 20px;
`;

export const JoinButton = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 15px;
  border: none;
  border-radius: 10px;
  background-color: #fe7488;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;
