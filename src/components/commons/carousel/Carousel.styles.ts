import styled from "@emotion/styled";
import { Carousel } from "antd";

interface CarouselButtonProps {
  isRight: boolean;
}

export const CarouselWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const CustomCarousel = styled(Carousel)`
  width: 500px;
  height: 600px;
  margin: 0 20px;
`;

export const CarouselButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: white;
  background-image: url("/markets/캐러셀버튼.png");
  transform: ${(props: CarouselButtonProps) =>
    props.isRight ? "scaleX(-1)" : "auto"};
  background-size: cover;
  cursor: pointer;
`;

export const ItemImages = styled.img`
  width: 500px;
  height: 600px;
`;

export const ImagesNum = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 70px;
  bottom: 20px;
  width: 40px;
  height: 25px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.4);
  font-size: 18px;
`;
