import styled from "@emotion/styled";
import { css } from "@emotion/react";

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const CommentListWrap = styled.div`
  ${flexColumn};
  justify-content: space-between;
  width: 1200px;
`;
