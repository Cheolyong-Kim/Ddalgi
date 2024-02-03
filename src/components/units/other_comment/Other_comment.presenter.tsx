import React from "react";

import { getDate } from "../../../commons/libraries/utils";

import Comment from "../comment/Comment.container";
import { ReviewRateWrap } from "../comment/Comment.styles";
import * as S from "./Other_comment.styles";

import type { IOtherCommentProps } from "./Other_comment.types";

import Rate from "../../commons/Rate/Rate.container";
import { Button, Modal } from "antd";

const OtherCommentUI = (props: IOtherCommentProps): JSX.Element => {
  console.log(props.data);

  return (
    <>
      {props.isEdit ? (
        <Comment
          id={props.data._id}
          setIsEdit={props.setIsEdit}
          isEdit={props.isEdit}
          data={props.data}
        />
      ) : (
        <S.OtherCommentWrap id={props.data._id}>
          <S.OtherComment>
            <S.OtherCommentProfileImg src="/boards/id/profile.png" />
            <S.OtherCommentDetailWrap>
              <S.OtherCommentDetail>
                <S.OtherCommentProfile>
                  <S.OtherCommentProfileName>
                    {props.data.writer}
                  </S.OtherCommentProfileName>
                  <ReviewRateWrap>
                    <Rate isReadOnly={true} value={props.data.rating} />
                  </ReviewRateWrap>
                </S.OtherCommentProfile>
                <S.OtherCommentContents>
                  {props.data.contents}
                </S.OtherCommentContents>
              </S.OtherCommentDetail>
              <S.OtherCommentCreated>
                {getDate(props.data.createdAt)}
              </S.OtherCommentCreated>
            </S.OtherCommentDetailWrap>
          </S.OtherComment>
          <S.OtherCommentRight>
            <S.OtherCommentBtnWrap>
              <S.OtherCommentBtn
                img_src={"/boards/id/update_btn.png"}
                onClick={props.onClickUpdate}
              ></S.OtherCommentBtn>
              <S.OtherCommentBtn
                img_src={"/boards/id/delete_btn.png"}
                onClick={props.onToggleModal}
              ></S.OtherCommentBtn>
              {props.isModalOpen && (
                <Modal
                  open={true}
                  onOk={props.onToggleModal}
                  onCancel={props.onToggleModal}
                  footer={[
                    <Button key="cancle" onClick={props.onToggleModal}>
                      cancle
                    </Button>,
                    <Button
                      id={props.data._id}
                      key="ok"
                      type="primary"
                      onClick={props.onClickDelete}
                    >
                      ok
                    </Button>,
                  ]}
                >
                  비밀번호를 입력하세요 :{" "}
                  <input onChange={props.onChangePassword} type="password" />
                </Modal>
              )}
            </S.OtherCommentBtnWrap>
          </S.OtherCommentRight>
        </S.OtherCommentWrap>
      )}
    </>
  );
};

export default OtherCommentUI;
