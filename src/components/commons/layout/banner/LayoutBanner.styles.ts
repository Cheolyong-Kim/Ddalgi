import styled from "@emotion/styled";
import { css } from "@emotion/react";

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
  height: 357px;
  padding-top: 60px;
  margin-bottom: 100px;
`;

export const Banner = styled.img`
  width: 100%;
  height: 357px;
`;

export const PhraseWrap = styled.div`
  position: absolute;
  top: 145px;
  left: 500px;
`;

export const Phrase = styled.p`
  display: block;
  margin-bottom: 10px;
  font-size: 30px;
  color: white;
`;

export const EmphasisSpan = styled.span`
  font-size: 33px;
  font-weight: bold;
`;
