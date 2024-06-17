import type { ApolloClient } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IRemarkPriceInputWrapProps {
  width: string;
}

export interface IMarketNewProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem"> | undefined;
  client?: ApolloClient<any>;
}

export interface IMarketNewData {
  name: string;
  remarks: string;
  contents: string;
  price: string;
  tags: string;
  addressDetail: string;
}

export interface IUseditemAddressInput {
  address?: string;
  addressDetail?: string;
}

export interface IMarketUpdateInput {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  tags?: string[];
  useditemAddress?: IUseditemAddressInput;
  images?: string[];
}
