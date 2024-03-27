import { useRouter } from "next/router";
import { visitedPageState } from "../stores";
import { useRecoilState } from "recoil";

interface IUseMoveToPageReturn {
  visitedPage: string;
  onClickMoveToPage: (path: string) => () => void;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);
  const router = useRouter();

  const onClickMoveToPage = (path: string) => (): void => {
    setVisitedPage(path);
    void router.push(path);
  };

  return { visitedPage, onClickMoveToPage };
};
