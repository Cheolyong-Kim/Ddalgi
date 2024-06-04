import { useRouter } from "next/router";
import { useEffect } from "react";
import getAccessToken from "../../../commons/libraries/getAccessToken";

export const withAuth =
  (Component: any) =>
  (props: any): any => {
    const router = useRouter();

    useEffect(() => {
      void getAccessToken().then((newAccessToken) => {
        if (newAccessToken === undefined) {
          alert("로그인 후 이용 가능합니다.");
          void router.push("/login");
        }
      });
    }, []);

    return <Component {...props} />;
  };
