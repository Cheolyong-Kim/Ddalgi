import type { Dispatch, SetStateAction } from "react";
import type { IQuery } from "../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface ISearchData {
  searchWord: string;
  searchDate: string;
}

export interface ISearchInputProps {
  search?: string;
  startDate?: string;
  endDate?: string;
}

export interface ISearchBarProps {
  searchDateOff?: boolean;
  refetch: <T>(
    variables?: Partial<T> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
  refetchCount: <T>(
    variables?: Partial<T> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
  setKeyword?: Dispatch<SetStateAction<string>>;
  setIsSearchWord?: Dispatch<SetStateAction<boolean>>;
}
