import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Carousel } from "antd";
import type { CarouselButtonProps } from "./LayoutBanner.types";

export const flexRow = css`
  display: flex;
  flex-direction: row;
`;

export const flexCol = css`
  display: flex;
  flex-direction: column;
`;

export const BannerWrap = styled.div`
  position: relative;
  height: 400px;
`;

export const Banner = styled(Carousel)`
  height: 400px;
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: calc(50% - 24px);
  left: ${(props: CarouselButtonProps) => (props.isLeft ? "350px" : "1450px")};
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  background-image: url("/banner/ic_navigate_before-24px.png");
  background-position: center;
  background-repeat: no-repeat;
  transform: ${(props: CarouselButtonProps) =>
    props.isLeft ? "" : "rotate(180deg)"};
  cursor: pointer;
  z-index: 1;
`;
