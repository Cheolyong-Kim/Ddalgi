import styled from "@emotion/styled";

export const SearchBarWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 65%;
`;

export const SearchBarInputWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
`;

export const SearchBarIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

export const SearchTitleInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 14px 16px 14px 10px;
  border: none;
  font-size: 18px;

  &::placeholder {
    color: #bbbbbb;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #404040;
  }
`;

export const SearchDateInput = styled.input`
  width: 25%;
  height: 40px;
  padding: 14px 16px 14px 16px;
  border: none;
  font-size: 12px;

  &::placeholder {
    color: #bbbbbb;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #404040;
  }
`;

export const SearchButton = styled.button`
  width: 7%;
  height: 35px;
  border: none;
  border-radius: 10px;
  background-color: #fe7488;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: white;
  cursor: pointer;
`;
