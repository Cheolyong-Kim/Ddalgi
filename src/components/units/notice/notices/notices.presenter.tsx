import * as N from "./notices.styles";
import type { INoticeUIProps } from "./notices.types";
import { getDate } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";

const NoticeUI = (props: INoticeUIProps): JSX.Element => {
  return (
    <N.NoticeWrap>
      <N.NoticeHeaderWrap>
        <N.NoticeTitle>공지사항</N.NoticeTitle>
        <N.SearchBarWrap>
          <N.SearchBarInputWrap>
            <N.SearchBarIcon src="/boards/ic_search-24px.png" />
            <N.SearchTitleInput
              type="text"
              placeholder="제목을 검색해주세요."
              onChange={props.onChangeSearchWord}
            />
          </N.SearchBarInputWrap>
          <N.SearchDateInput
            type="text"
            placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
            onChange={props.onChangeSearchDate}
          />
          <N.SearchButton onClick={props.onClickSearchButton}>
            검색
          </N.SearchButton>
        </N.SearchBarWrap>
      </N.NoticeHeaderWrap>
      <N.NoticeTable>
        <N.TableRow>
          <N.TableHeaderNum>번호</N.TableHeaderNum>
          <N.TableHeaderTitle>제목</N.TableHeaderTitle>
          <N.TableHeaderWriter>작성자</N.TableHeaderWriter>
          <N.TableHeaderDate>날짜</N.TableHeaderDate>
        </N.TableRow>
        {props.data?.map((doc, index) => (
          <N.TableRow key={doc.id}>
            <N.TableNum>{index + 1}</N.TableNum>
            <N.TableTitle>
              <N.TitleLink onClick={props.onClickTitle(doc.id)}>
                {props.isSearch ? (
                  <>
                    {doc
                      .data()
                      .title.replaceAll(
                        props.searchWord,
                        `@@@${props.searchWord}@@@`,
                      )
                      .split("@@@")
                      .map((el: string) => (
                        <span
                          key={uuidv4()}
                          style={{
                            color: el === props.searchWord ? "#fe7488" : "none",
                          }}
                        >
                          {el}
                        </span>
                      ))}
                  </>
                ) : (
                  <>{doc.data().title}</>
                )}
              </N.TitleLink>
            </N.TableTitle>
            <N.TableWriter>{doc.data().writer}</N.TableWriter>
            <N.TableDate>{getDate(doc.data().createdAt)}</N.TableDate>
          </N.TableRow>
        ))}
      </N.NoticeTable>
      <N.NoticeFooter>
        <N.PaginationWrap>
          <N.PaginationButton
            onClick={props.onClickPrev}
            isLeft={true}
          ></N.PaginationButton>
          {new Array(5).fill(0).map(
            (_, index) =>
              index + props.startPage <= props.lastPage && (
                <N.PaginationSpan
                  key={uuidv4()}
                  onClick={props.onClickPage(index + props.startPage)}
                  isActive={index + 1 === props.activatedPage}
                >
                  {index + props.startPage}
                </N.PaginationSpan>
              ),
          )}
          <N.PaginationButton
            onClick={props.onClickNext}
            isLeft={false}
          ></N.PaginationButton>
        </N.PaginationWrap>
        <N.CreateBtn onClick={props.onClickNewButton}>글쓰기</N.CreateBtn>
      </N.NoticeFooter>
    </N.NoticeWrap>
  );
};

export default NoticeUI;
