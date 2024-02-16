import type { IIntroductionsUIProps } from "./introductions.types";
import * as I from "./introductions.styles";
import { Pagination } from "antd";

const IntroductionsUI = (props: IIntroductionsUIProps): JSX.Element => {
  return (
    <I.MainWrap>
      <I.Table>
        <I.TableRow>
          <I.TableHeadName>이름</I.TableHeadName>
          <I.TableHeadAge>나이</I.TableHeadAge>
          <I.TableHeadHobby>취미</I.TableHeadHobby>
          <I.TableHeadProfile>남김말</I.TableHeadProfile>
        </I.TableRow>
        {props.data
          ?.slice(
            5 * ((props.currentPage ?? 1) - 1),
            5 * (props.currentPage ?? 1),
          )
          ?.map((doc) => (
            <I.TableRow key={doc.id}>
              <I.TableName>{doc.data().name}</I.TableName>
              <I.TableAge>{doc.data().age}</I.TableAge>
              <I.TableHobby>{doc.data().hobby.join(",")}</I.TableHobby>
              <I.TableProfile>{doc.data().profile}</I.TableProfile>
              <I.ButtonWrap>
                <I.UpdateDeleteButton id={doc.id} onClick={props.onClickUpdate}>
                  <img src="/boards/id/update_btn.png" />
                </I.UpdateDeleteButton>
                <I.UpdateDeleteButton id={doc.id} onClick={props.onClickDelete}>
                  <img src="/boards/id/delete_btn.png" />
                </I.UpdateDeleteButton>
              </I.ButtonWrap>
            </I.TableRow>
          ))}
      </I.Table>
      <Pagination
        defaultCurrent={1}
        total={props.data?.length}
        pageSize={5}
        onChange={props.onChangePage}
      ></Pagination>
      <I.CreateButton onClick={props.onClickCreate}>
        <I.CreateImg src="/boards/create.png" />
        자기소개 등록
      </I.CreateButton>
    </I.MainWrap>
  );
};

export default IntroductionsUI;
