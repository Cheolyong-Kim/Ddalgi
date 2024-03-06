import type { ISearchBarUIProps } from "./searchbar.types";
import * as S from "./searchbar.styles";

const SearchBarUI = (props: ISearchBarUIProps): JSX.Element => {
  return (
    <S.SearchBarWrap>
      <S.SearchBarInputWrap>
        <S.SearchBarIcon src="/boards/ic_search-24px.png" />
        <S.SearchTitleInput
          type="text"
          placeholder="제목을 검색해주세요."
          onChange={props.onChangeSearchWordInput}
        />
      </S.SearchBarInputWrap>
      <S.SearchDateInput
        type="text"
        placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
        onChange={props.onChangeSearchDateInput}
      />
      <S.SearchButton onClick={props.onClickSearchButton}>검색</S.SearchButton>
    </S.SearchBarWrap>
  );
};

export default SearchBarUI;
