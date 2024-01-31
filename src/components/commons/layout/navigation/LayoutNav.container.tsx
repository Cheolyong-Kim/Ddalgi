import { useRouter } from "next/router";
import LayoutNavUI from "./LayoutNav.presenter";
import type { MouseEvent } from "react";

const LayoutNav = (): JSX.Element => {
  const router = useRouter();

  const onClickLink = (event: MouseEvent<HTMLAnchorElement>): void => {
    void router.push(event.currentTarget.id);
  };

  return <LayoutNavUI onClickLink={onClickLink} />;
};

export default LayoutNav;
