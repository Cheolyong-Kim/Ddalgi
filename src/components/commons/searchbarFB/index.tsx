import { useForm } from "react-hook-form";
import * as S from "./SearchbarFB.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./SearchbarFB.validation";
import type { ISearchBarData, ISearchBarFBProps } from "./SearchbarFB.types";

const SearchBarFB = (props: ISearchBarFBProps): JSX.Element => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onClickSearch = (data: ISearchBarData): void => {
    const searchWord = data.searchWord;
    const searchDate = data.searchDate?.replaceAll(".", "-").split("~");

    if (!searchWord && searchDate.includes("")) {
      props.setDataCopy(props.data);
      props.setIsSearch(false);
    }

    if (searchWord && searchDate.includes("")) {
      const newData = props.data.filter((el) =>
        el.data().title.includes(searchWord),
      );

      props.setSearchWord(searchWord);
      props.setDataCopy(newData);
      props.setIsSearch(true);
    }

    if (!searchWord && !searchDate.includes("")) {
      const newData = props.data.filter(
        (el) =>
          new Date(el.data().createdAt) >= new Date(searchDate[0]) &&
          new Date(el.data().createdAt) <= new Date(searchDate[1]),
      );

      props.setDataCopy(newData);
      props.setIsSearch(true);
    }

    if (searchWord && !searchDate.includes("")) {
      const newData = props.data
        .filter((el) => el.data().title.includes(searchWord))
        .filter(
          (el) =>
            new Date(el.data().createdAt) >= new Date(searchDate[0]) &&
            new Date(el.data().createdAt) <= new Date(searchDate[1]),
        );

      props.setSearchWord(searchWord);
      props.setDataCopy(newData);
      props.setIsSearch(true);
    }
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
      <S.SearchDateInput
        type="text"
        placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
        {...register("searchDate")}
      />
      <S.SearchButton type="submit">검색</S.SearchButton>
    </S.SearchBarWrap>
  );
};

export default SearchBarFB;
