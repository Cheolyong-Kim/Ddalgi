import styled from "@emotion/styled";

export const MainWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
`;

export const PopUpLayer = styled.form`
  position: absolute;
  top: calc(50vh - 200px);
  left: calc(50vw - 175px);
  width: 350px;
  height: 350px;
  margin: auto;
  border-radius: 10px;
  background-color: white;
  z-index: 15;
`;

export const Dimed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: gray;
  opacity: 0.5;
`;

export const CancelButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  background-image: url(/boards/id/delete_btn.png);
  cursor: pointer;
`;

export const PopUpTitle = styled.h2`
  position: absolute;
  top: 80px;
  left: 45px;
  font-size: 20px;
  font-weight: bold;
`;

export const PopUpInput = styled.input`
  position: absolute;
  top: 145px;
  left: 45px;
  width: 250px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #404040;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

export const ErrorBox = styled.span`
  position: absolute;
  top: 180px;
  left: 50px;
  font-size: 14px;
  color: red;
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 135px;
  bottom: 20px;
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #fe7488;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;
