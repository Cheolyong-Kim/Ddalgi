import * as B from "./LayoutBanner.styles";

const LayoutBanner = (): JSX.Element => {
  return (
    <B.BannerWrap>
      <B.Banner src="/banner/banner.png" />
      <B.PhraseWrap>
        <B.Phrase>
          <B.EmphasisSpan>딸기</B.EmphasisSpan>처럼
        </B.Phrase>
        <B.Phrase>달콤한 중고거래</B.Phrase>
        <B.Phrase>
          믿을 수 있는 <B.EmphasisSpan>딸기마켓</B.EmphasisSpan>에서 시작하세요
        </B.Phrase>
      </B.PhraseWrap>
    </B.BannerWrap>
  );
};

export default LayoutBanner;
