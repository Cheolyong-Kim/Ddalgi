import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import getAccessToken from "../../../commons/libraries/getAccessToken";

interface IApolloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

const ApolloSetting = (props: IApolloSettingProps): JSX.Element => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 토큰 만료 에러인지 확인
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // refreshToken으로 새 accessToken 발급
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");

              // 토큰 만료로 실패한 쿼리를 다시 보내기
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
            }),
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  // 파일 업로드를 위한 uploadLink 생성
  const uploadLink = createUploadLink({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  useEffect(() => {
    // 새로고침해도 accessToken이 유지되도록함
    void getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
