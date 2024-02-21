import styled from "@emotion/styled";

export const SearchBarWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
`;

export const SearchTitleInput = styled.input`
  width: 60%;
  height: 52px;
  padding: 14px 16px 14px 45px;
  border: none;
  border-radius: 10px;
  background-color: #f2f2f2;
  background-image: url("/boards/ic_search-24px.png");
  background-repeat: no-repeat;
  background-position: 10px center;
  font-size: 16px;

  &::placeholder {
    color: black;
  }
`;

export const SearchDateInput = styled.input`
  width: 20%;
  height: 52px;
  padding: 14px 16px 14px 16px;
  border: 1px solid #bdbdbd;
  font-size: 16px;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const SearchButton = styled.button`
  width: 8%;
  height: 52px;
  padding: 14px 16px 14px 16px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: black;
  font-size: 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;
`;
