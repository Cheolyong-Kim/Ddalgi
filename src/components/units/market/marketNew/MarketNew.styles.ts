import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { IRemarkPriceInputWrapProps } from "./MarketNew.types";

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
  height: 30px;
  padding: 0 0 0 15px;
  margin-bottom: 3px;
  border: none;
  background-color: white;
  font-size: 18px;

  &::placeholder {
    font-size: 18px;
    color: #bbbbbb;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #404040;
  }
`;

export const ErrorMessage = styled.span`
  display: inline-block;
  padding-left: 15px;
  margin-bottom: 20px;
  font-size: 14px;
  color: red;
`;

export const RemarkPriceWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  width: 100%;
`;

export const RemarkPriceInputWrap = styled.div`
  ${flexCol};
  width: ${(props: IRemarkPriceInputWrapProps) => props.width};
`;

export const KakaoMapWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

export const AddressWrap = styled.div`
  ${flexCol};
  justify-content: end;
  width: 45%;
`;

export const AddressButton = styled.button`
  width: 90px;
  height: 35px;
  margin-bottom: 20px;
  border: none;
  background-color: #fe7488;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;

export const ButtonWrap = styled.div`
  ${flexRow};
  justify-content: end;
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
