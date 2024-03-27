import styled from "@emotion/styled";
import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";

interface ILayoutProps {
  children: JSX.Element;
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = (props: ILayoutProps): JSX.Element => {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <Body>{props.children}</Body>
      <LayoutFooter></LayoutFooter>
    </>
  );
};

export default Layout;
