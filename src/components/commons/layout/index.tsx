import styled from "@emotion/styled";
import LayoutBanner from "./banner";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNav from "./navigation/LayoutNav.container";

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
      <LayoutNav />
      <Body>{props.children}</Body>
    </>
  );
};

export default Layout;
