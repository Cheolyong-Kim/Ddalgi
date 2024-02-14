import type { ChangeEvent } from "react";

export interface IDataProps {
  age?: number;
  name?: string;
  hobby?: string[];
  profile?: string;
  createdAt?: string;
}

export interface IIntroductionProps {
  isEdit?: boolean;
  data?: IDataProps;
}

export interface IIntroductionNewUIProps {
  isEdit?: boolean;
  data?: IDataProps;
  onChangePersonalInfo: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeHobby: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeProfile: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => Promise<void>;
  isButtonAble: boolean;
}

export interface IIntroductionInputWrapProps {
  isPI?: boolean;
}

export interface IIntroductionSubmitButtonProps {
  isButtonAble: boolean;
}
