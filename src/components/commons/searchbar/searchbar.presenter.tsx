import type { ISearchBarUIProps } from "./searchbar.types";
import * as S from "./searchbar.styles";

const SearchBarUI = (props: ISearchBarUIProps): JSX.Element => {
  return (
    <S.SearchBarWrap>
      <S.SearchTitleInput
        type="text"
        placeholder="제목을 검색해주세요."
        onChange={props.onChangeSearchWordInput}
      />
      <S.SearchDateInput
        type="text"
        placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
        onChange={props.onChangeSearchDateInput}
      />
      <S.SearchButton onClick={props.onClickSearchButton}>
        검색하기
      </S.SearchButton>
    </S.SearchBarWrap>
  );
};

export default SearchBarUI;
