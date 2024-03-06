import * as N from "./NoticeNew.styles";
import type { INoticeNewUIProps } from "./NoticeNew.types";

const NoticeNewUI = (props: INoticeNewUIProps): JSX.Element => {
  return (
    <N.MainWrap>
      <N.PostTitleWrap>
        <N.BasicInput
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.title}
        ></N.BasicInput>
      </N.PostTitleWrap>
      <N.PostContentWrap>
        <N.ContentInput
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.data?.contents}
        ></N.ContentInput>
      </N.PostContentWrap>
      <N.AttachImageWrap>
        <N.AttachBtnsWrap>
          {props.images.length !== 0 ? (
            <>
              {props.images.map((el, index) => (
                <N.AttachBtnWrap key={index}>
                  <N.AttachBtn
                    id={String(index)}
                    src={`https://storage.googleapis.com/${el}`}
                    onClick={props.onClickUpdateImage}
                  />
                  <N.AttachInput
                    id={String(index)}
                    type="file"
                    onChange={props.onUpdateImage}
                    ref={(el) => {
                      if (props.imageFileUpdateRef.current)
                        props.imageFileUpdateRef.current[index] = el;
                    }}
                  />
                </N.AttachBtnWrap>
              ))}
              <N.AttachBtnWrap>
                <N.AttachBtn
                  src="/boards/new/uploadbtn.png"
                  onClick={props.onClickUploadImage}
                />
                <N.AttachInput
                  type="file"
                  onChange={props.onChangeImage}
                  ref={props.imageFileRef}
                />
              </N.AttachBtnWrap>
            </>
          ) : (
            <N.AttachBtnWrap>
              <N.AttachBtn
                src="/boards/new/uploadbtn.png"
                onClick={props.onClickUploadImage}
              />
              <N.AttachInput
                type="file"
                onChange={props.onChangeImage}
                ref={props.imageFileRef}
              />
            </N.AttachBtnWrap>
          )}
        </N.AttachBtnsWrap>
      </N.AttachImageWrap>
      <N.SubmitBtnWrap>
        <N.CancleBtn onClick={props.onClickCancleBtn}>취소</N.CancleBtn>
        <N.SubmitBtn
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmitBtn}
          disabled={props.isEdit ? false : props.btnDisable}
        >
          {props.isEdit ? "수정" : "등록"}
        </N.SubmitBtn>
      </N.SubmitBtnWrap>
    </N.MainWrap>
  );
};

export default NoticeNewUI;
