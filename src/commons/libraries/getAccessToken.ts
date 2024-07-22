import { GraphQLClient, gql } from "graphql-request";
import type { IMutation } from "../types/generated/types";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

const getAccessToken = async (): Promise<string | undefined> => {
  try {
    // ApolloProvider 바깥에 있기 때문에 useQuery() 사용 불가능
    // graphql-request 라이브러리를 사용해 해결
    const graphqlClient = new GraphQLClient(
      "https://backendonline.codebootcamp.co.kr/graphql",
      { credentials: "include" },
    );

    const result =
      await graphqlClient.request<Pick<IMutation, "restoreAccessToken">>(
        RESTORE_ACCESS_TOKEN,
      );

    const newAccessToken = result?.restoreAccessToken.accessToken;

    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};

export default getAccessToken;
