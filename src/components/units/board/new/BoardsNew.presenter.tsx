import { Global } from "@emotion/react";
import * as S from "./BoardsNew.styles";

import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

import type { IBoardsNewProps } from "./BoardsNew.types";

const BoardsNewUI = (props: IBoardsNewProps): JSX.Element => {
  console.log(props.images);

  return (
    <S.MainWrap>
      <Global styles={S.reset} />
      <S.TitleWrap>
        <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
      </S.TitleWrap>
      <S.UserInputWrap>
        <S.UserInputFormWrap>
          <S.InputName>작성자</S.InputName>
          <S.BasicInput
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeName}
            defaultValue={props.data?.fetchBoard.writer ?? ""}
            disabled={props.isEdit}
          ></S.BasicInput>
          <S.ErrorBox>{props.nameError}</S.ErrorBox>
        </S.UserInputFormWrap>
        <S.UserInputFormWrap>
          <S.InputName>비밀번호</S.InputName>
          <S.BasicInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangePwd}
          ></S.BasicInput>
          <S.ErrorBox>{props.pwdError}</S.ErrorBox>
        </S.UserInputFormWrap>
      </S.UserInputWrap>
      <S.PostTitleWrap>
        <S.InputName>제목</S.InputName>
        <S.BasicInput
          type="text"
          placeholder="제목을 입력해주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        ></S.BasicInput>
        <S.ErrorBox>{props.titleError}</S.ErrorBox>
      </S.PostTitleWrap>
      <S.PostContentWrap>
        <S.InputName>내용</S.InputName>
        <S.ContentInput
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContent}
          defaultValue={props.data?.fetchBoard.contents}
        ></S.ContentInput>
        <S.ErrorBox>{props.contentError}</S.ErrorBox>
      </S.PostContentWrap>
      <S.AddressInputFormWrap>
        <S.InputName>주소</S.InputName>
        <S.ZipCodeInputWrap>
          <S.ZipCodeInput
            type="text"
            placeholder="07250"
            readOnly
            value={
              (props.zipcode || props.data?.fetchBoard.boardAddress?.zipcode) ??
              ""
            }
          ></S.ZipCodeInput>
          <S.ZipCodeSearchBtn onClick={props.onToggleModal}>
            우편번호 검색
          </S.ZipCodeSearchBtn>
          {props.isModalOpen && (
            <Modal
              open={true}
              onOk={props.onToggleModal}
              onCancel={props.onToggleModal}
            >
              <DaumPostcodeEmbed onComplete={props.handleComplete} />
            </Modal>
          )}
        </S.ZipCodeInputWrap>
        <S.BasicInput
          type="text"
          readOnly
          value={
            (props.address || props.data?.fetchBoard.boardAddress?.address) ??
            ""
          }
        ></S.BasicInput>
        <S.BasicInput
          type="text"
          onChange={props.onChangeAddressDetail}
          defaultValue={
            props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
          }
        ></S.BasicInput>
      </S.AddressInputFormWrap>
      <S.YoutubeInputWrap>
        <S.InputName>유튜브</S.InputName>
        <S.BasicInput
          type="text"
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeYoutubeUrl}
          defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
        ></S.BasicInput>
      </S.YoutubeInputWrap>
      <S.AttachImageWrap>
        <S.InputName>사진 첨부</S.InputName>
        <S.AttachBtnWrap>
          {props.images.map((el, index) => (
            <S.UploadImg
              key={index}
              src={`https://storage.googleapis.com/${el}`}
            />
          ))}
          <>
            <S.AttachBtn
              src="/boards/new/uploadbtn.png"
              onClick={props.onClickUploadImage}
            />
            <S.AttachInput
              type="file"
              onChange={props.onChangeImage}
              ref={props.imageFileRef}
            />
          </>
        </S.AttachBtnWrap>
      </S.AttachImageWrap>
      <S.SettingWrap>
        <S.InputName>메인 설정</S.InputName>
        <S.CheckBoxWrap>
          <S.SettingCheckBox
            type="checkbox"
            id="youtube"
            name="setting"
            value="유튜브"
          ></S.SettingCheckBox>
          <S.SettingCheckLabel htmlFor="youtube">유튜브</S.SettingCheckLabel>
          <S.SettingCheckBox
            type="checkbox"
            id="upload_img"
            name="setting"
            value="사진"
          ></S.SettingCheckBox>
          <S.SettingCheckLabel htmlFor="upload_img">사진</S.SettingCheckLabel>
        </S.CheckBoxWrap>
      </S.SettingWrap>
      <S.SubmitBtnWrap>
        <S.SubmitBtn
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmitBtn}
          disabled={props.isEdit ? false : props.btnDisable}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </S.SubmitBtn>
      </S.SubmitBtnWrap>
    </S.MainWrap>
  );
};

export default BoardsNewUI;
