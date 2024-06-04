import * as B from "./Boards.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";
import Pagination from "../../../commons/pagination";
import SearchBar from "../../../commons/searchbar";
import {
  useQueryFetchBoards,
  useQueryFetchBoardsCount,
} from "../../../../commons/hooks/useQuery";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { useState } from "react";

const Boards = (): JSX.Element => {
  const [keyword, setKeyword] = useState("");
  const [isSearchWord, setIsSearchWord] = useState(false);

  const { data, refetch } = useQueryFetchBoards();

  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQueryFetchBoardsCount();

  const { onClickMoveToPage } = useMoveToPage();

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  return (
    <B.BoardsWrap>
      <B.BoardsHeaderWrap>
        <B.BoardsTitle>자유게시판</B.BoardsTitle>
        <SearchBar
          refetch={refetch}
          refetchCount={refetchBoardsCount}
          setKeyword={setKeyword}
          setIsSearchWord={setIsSearchWord}
        />
      </B.BoardsHeaderWrap>
      <B.BoardsTable>
        <B.TableRow>
          <B.TableHeaderNum>번호</B.TableHeaderNum>
          <B.TableHeaderTitle>제목</B.TableHeaderTitle>
          <B.TableHeaderWriter>작성자</B.TableHeaderWriter>
          <B.TableHeaderDate>날짜</B.TableHeaderDate>
        </B.TableRow>
        {data?.fetchBoards.map((el, index) => (
          <B.TableRow key={el._id}>
            <B.TableNum>{index + 1}</B.TableNum>
            <B.TableTitle>
              <B.TitleLink onClick={onClickMoveToPage(`/boards/${el._id}`)}>
                {isSearchWord ? (
                  <>
                    {el.title
                      .replaceAll(keyword, `@#@#@#${keyword}@#@#@#`)
                      .split("@#@#@#")
                      .map((el) => (
                        <span
                          key={uuidv4()}
                          style={{
                            color: el === keyword ? "#fe7488" : "none",
                          }}
                        >
                          {el}
                        </span>
                      ))}
                  </>
                ) : (
                  <>{el.title}</>
                )}
              </B.TitleLink>
            </B.TableTitle>
            <B.TableWriter>{el.writer}</B.TableWriter>
            <B.TableDate>{getDate(el.createdAt)}</B.TableDate>
          </B.TableRow>
        ))}
      </B.BoardsTable>
      <B.BoardsFooter>
        <Pagination refetch={refetch} lastPage={lastPage} />
        <B.CreateBtn onClick={onClickMoveToPage("/boards/new")}>
          글쓰기
        </B.CreateBtn>
      </B.BoardsFooter>
    </B.BoardsWrap>
  );
};

export default Boards;
