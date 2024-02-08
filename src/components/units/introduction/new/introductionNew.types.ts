import type { ChangeEvent } from "react";

export interface IIntroductionNewUIProps {
  onChangePersonalInfo: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeHobby: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeProfile: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  isButtonAble: boolean;
}

export interface IIntroductionInputWrapProps {
  isPI?: boolean;
}

export interface IIntroductionSubmitButtonProps {
  isButtonAble: boolean;
}
