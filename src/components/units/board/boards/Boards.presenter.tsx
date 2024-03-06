import * as S from "./Boards.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";
import type { IBoardsUIProps } from "./Boards.types";
import Pagination from "../../../commons/pagination/pagination.container";
import SearchBar from "../../../commons/searchbar/searchbar.container";

const BoardsUI = (props: IBoardsUIProps): JSX.Element => {
  return (
    <S.BoardsWrap>
      <S.BoardsHeaderWrap>
        <S.BoardsTitle>자유게시판</S.BoardsTitle>
        <SearchBar
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
          setKeyword={props.setKeyword}
          setIsSearchWord={props.setIsSearchWord}
        />
      </S.BoardsHeaderWrap>
      <S.BoardsTable>
        <S.TableRow>
          <S.TableHeaderNum>번호</S.TableHeaderNum>
          <S.TableHeaderTitle>제목</S.TableHeaderTitle>
          <S.TableHeaderWriter>작성자</S.TableHeaderWriter>
          <S.TableHeaderDate>날짜</S.TableHeaderDate>
        </S.TableRow>
        {props?.data?.fetchBoards.map((el, index) => (
          <S.TableRow key={el._id}>
            <S.TableNum>{index + 1}</S.TableNum>
            <S.TableTitle>
              <S.TitleLink id={el._id} onClick={props.onClickMoveDetail}>
                {props.isSearchWord ? (
                  <>
                    {el.title
                      .replaceAll(props.keyword, `@#@#@#${props.keyword}@#@#@#`)
                      .split("@#@#@#")
                      .map((el) => (
                        <span
                          key={uuidv4()}
                          style={{
                            color: el === props.keyword ? "#fe7488" : "none",
                          }}
                        >
                          {el}
                        </span>
                      ))}
                  </>
                ) : (
                  <>{el.title}</>
                )}
              </S.TitleLink>
            </S.TableTitle>
            <S.TableWriter>{el.writer}</S.TableWriter>
            <S.TableDate>{getDate(el.createdAt)}</S.TableDate>
          </S.TableRow>
        ))}
      </S.BoardsTable>
      <S.BoardsFooter>
        <Pagination refetch={props.refetch} lastPage={props.lastPage} />
        <S.CreateBtn onClick={props.onClickCreateBoard}>글쓰기</S.CreateBtn>
      </S.BoardsFooter>
    </S.BoardsWrap>
  );
};

export default BoardsUI;
