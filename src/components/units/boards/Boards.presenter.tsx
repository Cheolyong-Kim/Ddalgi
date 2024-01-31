import * as S from "./Boards.styles";
import { getDate } from "../../../commons/libraries/utils";

import type { IBoardsProps } from "./Boards.types";
import Pagination from "../../commons/pagination/pagination.container";

const BoardsUI = (props: IBoardsProps): JSX.Element => {
  return (
    <S.BoardsWrap>
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
                {el.title}
              </S.TitleLink>
            </S.TableTitle>
            <S.TableWriter>{el.writer}</S.TableWriter>
            <S.TableDate>{getDate(el.createdAt)}</S.TableDate>
          </S.TableRow>
        ))}
      </S.BoardsTable>
      <S.BoardsFooter>
        <Pagination refetch={props.refetch} lastPage={props.lastPage} />
        <S.CreateBtn onClick={props.onClickCreateBoard}>
          <S.CreateBtnImg src="/boards/create.png" />
          게시물 등록하기
        </S.CreateBtn>
      </S.BoardsFooter>
    </S.BoardsWrap>
  );
};

export default BoardsUI;
