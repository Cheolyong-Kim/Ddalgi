import styled from "@emotion/styled";

export const AttachImageWrap = styled.div`
  margin-bottom: 40px;
`;

export const AttachBtnsWrap = styled.div`
  display: flex;
  flex-direction: row;
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
