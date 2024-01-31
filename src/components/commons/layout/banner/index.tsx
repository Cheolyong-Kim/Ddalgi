import { useRef } from "react";
import { BannerWrap, Banner, CarouselButton } from "./LayoutBanner.styles";

const LayoutBanner = (): JSX.Element => {
  const ref = useRef();

  return (
    <BannerWrap>
      <CarouselButton
        onClick={() => {
          ref.current?.prev();
        }}
        isLeft={true}
      ></CarouselButton>
      <Banner ref={ref} autoplay>
        <img src="/banner/carousel_image_01.png" />
        <img src="/banner/carousel_image_02.png" />
        <img src="/banner/carousel_image_03.png" />
      </Banner>
      <CarouselButton
        onClick={() => {
          ref.current?.next();
        }}
        isLeft={false}
      ></CarouselButton>
    </BannerWrap>
  );
};

export default LayoutBanner;
