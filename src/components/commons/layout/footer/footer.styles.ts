import styled from "@emotion/styled";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 220px;
  padding: 30px 0;
  background-color: #e4e4e4;
`;

export const FooterContentsWrap = styled.div`
  width: 1200px;
`;

export const FooterPhrase = styled.p`
  display: block;
  margin-bottom: 18px;
  font-size: 17px;
  color: #575757;
`;

export const FooterSpan = styled.span`
  display: inline-block;
  width: 80px;
  font-size: 17px;
  font-weight: bold;
  color: #404040;
`;

export const FooterLine = styled.hr`
  height: 1px;
  margin: 30px 0;
  border: none;
  background-color: #bbbbbb;
`;

export const FooterCopyRight = styled.p`
  text-align: right;
  font-size: 16px;
  color: #bbbbbb;
`;
