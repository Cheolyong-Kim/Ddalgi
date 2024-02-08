import * as S from "./introductionNew.styles";
import type { IIntroductionNewUIProps } from "./introductionNew.types";

const IntroductionNewUI = (props: IIntroductionNewUIProps): JSX.Element => {
  return (
    <S.MainWrap>
      <S.IntroductionPersonalInfoWrap>
        <S.IntroductionInputWrap isPI={true}>
          <S.IntroductionSpan>나이</S.IntroductionSpan>
          <S.IntroductionInput
            id="age"
            type="text"
            placeholder="나이를 작성해주세요."
            onChange={props.onChangePersonalInfo}
          />
        </S.IntroductionInputWrap>
        <S.IntroductionInputWrap isPI={true}>
          <S.IntroductionSpan>이름</S.IntroductionSpan>
          <S.IntroductionInput
            id="name"
            type="text"
            placeholder="이름을 작성해주세요."
            onChange={props.onChangePersonalInfo}
          />
        </S.IntroductionInputWrap>
      </S.IntroductionPersonalInfoWrap>
      <S.IntroductionInputWrap>
        <S.IntroductionSpan>취미</S.IntroductionSpan>
        <S.IntroductionInput
          type="text"
          placeholder="취미를 작성해주세요. (구분자는 ,를 사용해주세요)"
          onChange={props.onChangeHobby}
        />
      </S.IntroductionInputWrap>
      <S.IntroductionInputWrap>
        <S.IntroductionSpan>남길 말</S.IntroductionSpan>
        <S.IntroductionTextArea
          placeholder="남길 말을 작성해주세요."
          onChange={props.onChangeProfile}
        ></S.IntroductionTextArea>
      </S.IntroductionInputWrap>
      <S.IntroductionSubmitButton
        onClick={props.onClickSubmit}
        isButtonAble={props.isButtonAble}
        disabled={!props.isButtonAble}
      >
        등록하기
      </S.IntroductionSubmitButton>
    </S.MainWrap>
  );
};

export default IntroductionNewUI;
