import { useRecoilState } from "recoil";
import * as BN from "./BoardsNew.styles";
import type { IBoardsNewData, IBoardsNewProps } from "./BoardsNew.types";
import { accessTokenState } from "../../../../commons/stores";
import * as _ from "lodash";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./BoardsNew.validation";
import { useQueryFetchUserLoggedIn } from "../../../../commons/hooks/useQuery";
import {
  useMutationCreateBoard,
  useMutationUpdateBoard,
} from "../../../../commons/hooks/useMutation";
import { useRouter } from "next/router";
import { useState } from "react";
import { UploadImageForm } from "../../../commons/uploadImage";
import type { IUpdateBoardInput } from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

const BoardsNew = (props: IBoardsNewProps): JSX.Element => {
  const [accessToken] = useRecoilState(accessTokenState);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const [images, setImages] = useState<string[]>([]);

  const { data: userData } = useQueryFetchUserLoggedIn();
  const [createBoard] = useMutationCreateBoard();
  const [updateBoard] = useMutationUpdateBoard();
  const { onClickMoveToPage } = useMoveToPage();

  const router = useRouter();

  const onClickSubmit = async (data: IBoardsNewData): Promise<void> => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: accessToken
              ? userData?.fetchUserLoggedIn.name
              : data.writer,
            password: data.password,
            title: data.title ?? "",
            contents: data.contents ?? "",
            youtubeUrl: data.youtubeUrl,
            images,
          },
        },
      });

      void router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = async (data: IBoardsNewData): Promise<void> => {
    const updateBoardInput: IUpdateBoardInput = {};
    if (data.title) updateBoardInput.title = data.title;
    if (data.contents) updateBoardInput.contents = data.contents;
    if (data.youtubeUrl) updateBoardInput.youtubeUrl = data.youtubeUrl;
    if (images.length !== 0) updateBoardInput.images = images;

    try {
      if (typeof router.query.id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          password: data.password,
          boardId: router.query.id,
        },
      });

      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BN.MainWrap>
      <form
        onSubmit={handleSubmit(props.isEdit ? onClickUpdate : onClickSubmit)}
      >
        <BN.UserInputWrap>
          <BN.UserInputFormWrap>
            <BN.BasicInput
              type="text"
              placeholder="작성자"
              defaultValue={
                accessToken
                  ? userData?.fetchUserLoggedIn.name ?? ""
                  : props.data?.fetchBoard.writer ?? ""
              }
              disabled={props.isEdit || !_.isEmpty(accessToken)}
              isNonMember={true}
              {...register("writer")}
            ></BN.BasicInput>
            <BN.ErrorBox>{formState.errors.writer?.message}</BN.ErrorBox>
          </BN.UserInputFormWrap>
          <BN.UserInputFormWrap>
            <BN.BasicInput
              type="password"
              placeholder="비밀번호"
              isNonMember={true}
              {...register("password")}
            ></BN.BasicInput>
            <BN.ErrorBox>{formState.errors.password?.message}</BN.ErrorBox>
          </BN.UserInputFormWrap>
        </BN.UserInputWrap>
        <BN.PostTitleWrap>
          <BN.BasicInput
            type="text"
            placeholder="제목을 작성해주세요."
            defaultValue={props.data?.fetchBoard.title}
            {...register("title")}
          ></BN.BasicInput>
          <BN.ErrorBox>{formState.errors.title?.message}</BN.ErrorBox>
        </BN.PostTitleWrap>
        <BN.PostContentWrap>
          <BN.ContentInput
            placeholder="내용을 작성해주세요."
            defaultValue={props.data?.fetchBoard.contents}
            {...register("contents")}
          ></BN.ContentInput>
          <BN.ErrorBox>{formState.errors.contents?.message}</BN.ErrorBox>
        </BN.PostContentWrap>
        <BN.YoutubeInputWrap>
          <BN.BasicInput
            type="text"
            placeholder="유튜브 링크를 복사해주세요."
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
            {...register("youtubeUrl")}
          ></BN.BasicInput>
        </BN.YoutubeInputWrap>
        <UploadImageForm
          data={props.data}
          images={images}
          setImages={setImages}
        />
        <BN.SettingWrap>
          <BN.InputName>메인 설정</BN.InputName>
          <BN.CheckBoxWrap>
            <BN.SettingCheckBox
              type="checkbox"
              id="youtube"
              name="setting"
              value="유튜브"
            ></BN.SettingCheckBox>
            <BN.SettingCheckLabel htmlFor="youtube">
              유튜브
            </BN.SettingCheckLabel>
            <BN.SettingCheckBox
              type="checkbox"
              id="upload_img"
              name="setting"
              value="사진"
            ></BN.SettingCheckBox>
            <BN.SettingCheckLabel htmlFor="upload_img">
              사진
            </BN.SettingCheckLabel>
          </BN.CheckBoxWrap>
        </BN.SettingWrap>
        <BN.SubmitBtnWrap>
          <BN.CancleBtn
            type="button"
            onClick={onClickMoveToPage(
              props.data ? `/boards/${router.query.id as string}` : "/boards",
            )}
          >
            취소
          </BN.CancleBtn>
          <BN.SubmitBtn type="submit">
            {props.isEdit ? "수정" : "등록"}
          </BN.SubmitBtn>
        </BN.SubmitBtnWrap>
      </form>
    </BN.MainWrap>
  );
};

export default BoardsNew;
