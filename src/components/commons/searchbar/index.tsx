import type {
  ISearchBarProps,
  ISearchData,
  ISearchInputProps,
} from "./Searchbar.types";
import * as S from "./Searchbar.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Searchbar.validation";
import * as _ from "lodash";

const SearchBar = (props: ISearchBarProps): JSX.Element => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onClickSearch = (data: ISearchData): void => {
    const searchVariables: ISearchInputProps = {};
    if (data.searchWord) searchVariables.search = data.searchWord;
    if (data.searchDate) {
      const newSearchDate = data.searchDate.replaceAll(".", "-").split("~");
      searchVariables.startDate = newSearchDate[0];
      searchVariables.endDate = newSearchDate[1];
    }

    // 검색 내용 없이 검색하면 모든 데이터 보여주기
    if (_.isEmpty(searchVariables)) {
      props.setKeyword?.("");
      props.setIsSearch?.(false);
      void props.refetch({
        search: "",
        startDate: "0000-01-01",
        endDate: "9999-12-31",
        page: 1,
      });
      void props.refetchCount({
        search: "",
        startDate: "0000-01-01",
        endDate: "9999-12-31",
      });
      return;
    }

    props.setKeyword?.(data.searchWord);
    props.setIsSearch?.(true);
    void props.refetch({ ...searchVariables, page: 1 });
    void props.refetchCount({ ...searchVariables });
  };

  return (
    <S.SearchBarWrap onSubmit={handleSubmit(onClickSearch)}>
      <S.SearchBarInputWrap>
        <S.SearchBarIcon src="/boards/ic_search-24px.png" />
        <S.SearchTitleInput
          type="text"
          placeholder="제목을 검색해주세요."
          {...register("searchWord")}
        />
      </S.SearchBarInputWrap>
      {props.searchDateOff ?? (
        <S.SearchDateInput
          type="text"
          placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
          {...register("searchDate")}
        />
      )}
      <S.SearchButton type="submit">검색</S.SearchButton>
    </S.SearchBarWrap>
  );
};

export default SearchBar;
