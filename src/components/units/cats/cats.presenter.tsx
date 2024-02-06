import type { ICatsUIProps } from "./cats.types";
import { MainWrap, CatImgWrap, CatImg, CatButton } from "./cats.styles";

const CatsUI = (props: ICatsUIProps): JSX.Element => {
  return (
    <MainWrap>
      <CatImgWrap>
        <CatImg src={props.data} onClick={props.onClickImg} />
      </CatImgWrap>
      <CatButton onClick={props.onClickImg}>새로운 고양이 보기</CatButton>
    </MainWrap>
  );
};

export default CatsUI;
