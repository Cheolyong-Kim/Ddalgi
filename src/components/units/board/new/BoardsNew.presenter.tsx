import * as S from "./BoardsNew.styles";
import type { IBoardsNewProps } from "./BoardsNew.types";

const BoardsNewUI = (props: IBoardsNewProps): JSX.Element => {
  return (
    <S.MainWrap>
      <S.UserInputWrap>
        <S.UserInputFormWrap>
          <S.BasicInput
            type="text"
            placeholder="작성자"
            onChange={props.onChangeName}
            defaultValue={props.data?.fetchBoard.writer ?? ""}
            disabled={props.isEdit}
            isNonMember={true}
          ></S.BasicInput>
          <S.ErrorBox>{props.nameError}</S.ErrorBox>
        </S.UserInputFormWrap>
        <S.UserInputFormWrap>
          <S.BasicInput
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePwd}
            isNonMember={true}
          ></S.BasicInput>
          <S.ErrorBox>{props.pwdError}</S.ErrorBox>
        </S.UserInputFormWrap>
      </S.UserInputWrap>
      <S.PostTitleWrap>
        <S.BasicInput
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        ></S.BasicInput>
        <S.ErrorBox>{props.titleError}</S.ErrorBox>
      </S.PostTitleWrap>
      <S.PostContentWrap>
        <S.ContentInput
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContent}
          defaultValue={props.data?.fetchBoard.contents}
        ></S.ContentInput>
        <S.ErrorBox>{props.contentError}</S.ErrorBox>
      </S.PostContentWrap>
      <S.YoutubeInputWrap>
        <S.BasicInput
          type="text"
          placeholder="유튜브 링크를 복사해주세요."
          onChange={props.onChangeYoutubeUrl}
          defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
        ></S.BasicInput>
      </S.YoutubeInputWrap>
      <S.AttachImageWrap>
        <S.AttachBtnsWrap>
          {props.images.length !== 0 ? (
            <>
              {props.images.map((el, index) => (
                <S.AttachBtnWrap key={index}>
                  <S.AttachBtn
                    id={String(index)}
                    src={`https://storage.googleapis.com/${el}`}
                    onClick={props.onClickUpdateImage}
                  />
                  <S.AttachInput
                    id={String(index)}
                    type="file"
                    onChange={props.onUpdateImage}
                    ref={(el) => {
                      if (props.imageFileUpdateRef.current)
                        props.imageFileUpdateRef.current[index] = el;
                    }}
                  />
                </S.AttachBtnWrap>
              ))}
              <S.AttachBtnWrap>
                <S.AttachBtn
                  src="/boards/new/uploadbtn.png"
                  onClick={props.onClickUploadImage}
                />
                <S.AttachInput
                  type="file"
                  onChange={props.onChangeImage}
                  ref={props.imageFileRef}
                />
              </S.AttachBtnWrap>
            </>
          ) : (
            <S.AttachBtnWrap>
              <S.AttachBtn
                src="/boards/new/uploadbtn.png"
                onClick={props.onClickUploadImage}
              />
              <S.AttachInput
                type="file"
                onChange={props.onChangeImage}
                ref={props.imageFileRef}
              />
            </S.AttachBtnWrap>
          )}
        </S.AttachBtnsWrap>
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
        <S.CancleBtn onClick={props.onClickCancleBtn}>취소</S.CancleBtn>
        <S.SubmitBtn
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmitBtn}
          disabled={props.isEdit ? false : props.btnDisable}
        >
          {props.isEdit ? "수정" : "등록"}
        </S.SubmitBtn>
      </S.SubmitBtnWrap>
    </S.MainWrap>
  );
};

export default BoardsNewUI;
