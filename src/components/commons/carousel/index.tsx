import { useRef, useState } from "react";
import * as C from "./Carousel.styles";
import * as _ from "lodash";

interface CarouselProps {
  images: string[];
}

const CustomCarousel = (props: CarouselProps): JSX.Element => {
  const [currentImageNum, setCurrentImageNum] = useState(0);
  const slider = useRef<any>(null); // prev, next 메소드 ts에러 해결을 위해 any타입 설정

  const newImages = props.images?.filter((el) => el !== "");

  const onClickCarouselButton = (type: string) => () => {
    if (type === "prev") {
      slider.current?.prev();
      setCurrentImageNum((prev) => prev - 1);
    } else {
      slider.current?.next();
      setCurrentImageNum((prev) => prev + 1);
    }
  };

  return !_.isEmpty(newImages) ? (
    <C.CarouselWrap>
      <C.CarouselButton
        onClick={onClickCarouselButton("prev")}
        isRight={false}
      />
      <C.CustomCarousel dots={false} ref={slider}>
        {newImages.map((el, index) => (
          <C.ItemImages
            key={index}
            src={`https://storage.googleapis.com/${el}`}
          />
        ))}
      </C.CustomCarousel>
      <C.ImagesNum>
        {currentImageNum < 0
          ? (currentImageNum + newImages.length + 1) % (newImages.length + 1)
          : (currentImageNum % newImages.length) + 1}{" "}
        / {newImages.length}
      </C.ImagesNum>
      <C.CarouselButton
        onClick={onClickCarouselButton("next")}
        isRight={true}
      />
    </C.CarouselWrap>
  ) : (
    <></>
  );
};

export default CustomCarousel;
