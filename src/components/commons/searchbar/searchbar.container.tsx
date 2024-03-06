import { useState, type ChangeEvent } from "react";
import type { ISearchInputProps, ISearchBarProps } from "./searchbar.types";
import SearchBarUI from "./searchbar.presenter";
import * as _ from "lodash";

const SearchBar = (props: ISearchBarProps): JSX.Element => {
  const [searchWord, setSearchWord] = useState("");
  const [searchDate, setSearchDate] = useState<string[]>([]);

  const onChangeSearchWordInput = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearchWord(event.currentTarget.value);
  };

  const onChangeSearchDateInput = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    if (!event.currentTarget.value) {
      setSearchDate([]);
      return;
    }
    const dateArray = event.currentTarget.value.replaceAll(".", "-").split("~");
    setSearchDate(dateArray);
  };

  const onClickSearchButton = (): void => {
    const searchVariables: ISearchInputProps = {};
    if (searchWord) searchVariables.search = searchWord;
    if (searchDate.length !== 0) {
      searchVariables.startDate = searchDate[0];
      searchVariables.endDate = searchDate[1];
    }

    if (_.isEmpty(searchVariables)) {
      props.setKeyword("");
      props.setIsSearchWord(false);
      setSearchWord("");
      setSearchDate([]);
      void props.refetch({
        search: "",
        startDate: "0000-01-01",
        endDate: "9999-12-31",
        page: 1,
      });
      return;
    }

    props.setKeyword(searchWord);
    props.setIsSearchWord(true);
    void props.refetch({ ...searchVariables, page: 1 });
    void props.refetchBoardsCount({ ...searchVariables });
  };

  return (
    <SearchBarUI
      onChangeSearchWordInput={onChangeSearchWordInput}
      onChangeSearchDateInput={onChangeSearchDateInput}
      onClickSearchButton={onClickSearchButton}
    />
  );
};

export default SearchBar;
