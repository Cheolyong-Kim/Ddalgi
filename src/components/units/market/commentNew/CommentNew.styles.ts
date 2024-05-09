import styled from "@emotion/styled";

export const InputForm = styled.form`
  position: relative;
  width: 100%;
  border: 1px solid #bbbbbb;
  margin-bottom: 30px;
`;

export const ContentsInput = styled.textarea`
  width: 100%;
  height: 161px;
  padding: 20px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #404040;
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #bbbbbb;
  }
`;

export const ContentsLimit = styled.span`
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-size: 16px;
  color: #bbbbbb;
`;

export const CancleBtn = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 70px;
  bottom: 0;
  width: 70px;
  height: 40px;
  border: 1px solid #bbbbbb;
  background: white;
  font-size: 16px;
  color: #404040;
  text-decoration: none;
  cursor: pointer;
`;

export const SubmitBtn = styled.button`
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 70px;
  height: 40px;
  border: none;
  background: #fe7488;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;
