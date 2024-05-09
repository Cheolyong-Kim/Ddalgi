import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth =
  (Component: any) =>
  (props: any): any => {
    const router = useRouter();

    useEffect(() => {
      if (!localStorage.getItem("accessToken")) {
        alert("로그인이 필요한 페이지입니다.");
        void router.push("/login");
      }
    }, []);

    return <Component {...props} />;
  };
