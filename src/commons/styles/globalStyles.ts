import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "myfont", sans-serif;
  }

  @font-face {
    font-family: "myFont";
    src: url("/fonts/NotoSansKR-VariableFont_wght.ttf");
  }
`;
