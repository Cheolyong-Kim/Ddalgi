import * as F from "./LayoutFooter.styles";

const LayoutFooter = (): JSX.Element => {
  return (
    <F.Footer>
      <F.FooterContentsWrap>
        <F.FooterPhrase>
          <F.FooterSpan>이메일</F.FooterSpan>lego9068@naver.com
        </F.FooterPhrase>
        <F.FooterPhrase>
          <F.FooterSpan>전화</F.FooterSpan>010-5191-9068
        </F.FooterPhrase>
        <F.FooterPhrase>
          <F.FooterSpan>블로그</F.FooterSpan>https://cheolyong.tistory.com
        </F.FooterPhrase>
        <F.FooterLine />
        <F.FooterCopyRight>@2024 cheolyong</F.FooterCopyRight>
      </F.FooterContentsWrap>
    </F.Footer>
  );
};

export default LayoutFooter;
