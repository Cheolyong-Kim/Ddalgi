import * as N from "./notices.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";
import { useQueryDocs } from "../../../../commons/hooks/useFirebase";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { PaginationFB } from "../../../commons/paginationFB";
import { useState } from "react";
import SearchBarFB from "../../../commons/searchbarFB";

const Notice = (): JSX.Element => {
  const [searchWord, setSearchWord] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [activatedPage, setActivatedPage] = useState(1);

  const { data, dataCopy, setDataCopy } = useQueryDocs("Notice");
  const { onClickMoveToPage } = useMoveToPage();

  const lastPage = Math.ceil(dataCopy?.length / 10);

  const slicedData = dataCopy.slice(
    0 + 10 * (activatedPage - 1),
    10 + 10 * (activatedPage - 1),
  );

  return (
    <N.NoticeWrap>
      <N.NoticeHeaderWrap>
        <N.NoticeTitle>공지사항</N.NoticeTitle>
        <SearchBarFB
          data={data}
          setDataCopy={setDataCopy}
          setIsSearch={setIsSearch}
          setSearchWord={setSearchWord}
        />
      </N.NoticeHeaderWrap>
      <N.NoticeTable>
        <N.TableRow>
          <N.TableHeaderNum>번호</N.TableHeaderNum>
          <N.TableHeaderTitle>제목</N.TableHeaderTitle>
          <N.TableHeaderWriter>작성자</N.TableHeaderWriter>
          <N.TableHeaderDate>날짜</N.TableHeaderDate>
        </N.TableRow>
        {slicedData?.map((doc, index) => (
          <N.TableRow key={doc.id}>
            <N.TableNum>{index + 1}</N.TableNum>
            <N.TableTitle>
              <N.TitleLink onClick={onClickMoveToPage(`/notice/${doc.id}`)}>
                {isSearch ? (
                  <>
                    {doc
                      .data()
                      .title.replaceAll(searchWord, `@@@${searchWord}@@@`)
                      .split("@@@")
                      .map((el: string) => (
                        <span
                          key={uuidv4()}
                          style={{
                            color: el === searchWord ? "#fe7488" : "none",
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
        <PaginationFB
          lastPage={lastPage}
          activatedPage={activatedPage}
          setActivatedPage={setActivatedPage}
        />
        <N.CreateBtn onClick={onClickMoveToPage(`/notice/new`)}>
          글쓰기
        </N.CreateBtn>
      </N.NoticeFooter>
    </N.NoticeWrap>
  );
};

export default Notice;
