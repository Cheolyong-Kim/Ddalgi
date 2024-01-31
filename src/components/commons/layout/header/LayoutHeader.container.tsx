import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

const LayoutHeader = (): JSX.Element => {
  const router = useRouter();

  const onClickLogo = (): void => {
    void router.push("/boards");
  };

  return <LayoutHeaderUI onClickLogo={onClickLogo} />;
};

export default LayoutHeader;
