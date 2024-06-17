import { useForm } from "react-hook-form";
import UploadImageFormFB from "../../../commons/uploadImageFB";
import * as NN from "./NoticeNew.styles";
import type {
  INoticeNewData,
  INoticeNewProps,
  IUpdateNoticeInputProps,
} from "./NoticeNew.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./NoticeNew.validation";
import { useState } from "react";
import { doc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

const NoticeNew = (props: INoticeNewProps): JSX.Element => {
  const { register, handleSubmit, formState } = useForm({
    resolver: props.isEdit ? undefined : yupResolver(schema),
    mode: "onSubmit",
  });
  const [images, setImages] = useState<string[]>([]);

  const router = useRouter();

  const db = getFirestore(firebaseApp);

  const onClickCancle = (): void => {
    if (props.data === undefined) void router.push("/notice");
    else {
      if (typeof router.query.id !== "string") return;
      void router.push(`/notice/${router.query.id}`);
    }
  };

  const onClickSubmit = async (data: INoticeNewData): Promise<void> => {
    try {
      const id = uuidv4();
      void setDoc(doc(db, "Notice", id), {
        writer: "운영자",
        title: data.title,
        contents: data.contents,
        images,
        createdAt: new Date().toString(),
      });

      void router.push(`/notice/${id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = async (data: INoticeNewData): Promise<void> => {
    if (!data.title && !data.contents) {
      alert("수정할 내용을 입력하세요");
      return;
    }

    const updateNoticeInput: IUpdateNoticeInputProps = {};
    if (data.title) updateNoticeInput.title = data.title;
    if (data.contents) updateNoticeInput.contents = data.contents;
    if (images.length !== 0) updateNoticeInput.images = images;

    if (typeof router.query.id !== "string") return;
    const noticeRef = doc(db, "Notice", router.query.id);

    try {
      await updateDoc(noticeRef, { ...updateNoticeInput });
      void router.push(`/notice/${router.query.id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <NN.MainWrap
      onSubmit={handleSubmit(props.isEdit ? onClickUpdate : onClickSubmit)}
    >
      <NN.PostTitleWrap>
        <NN.BasicInput
          type="text"
          placeholder="제목을 작성해주세요."
          {...register("title")}
          defaultValue={props.data?.title}
        ></NN.BasicInput>
        <NN.ErrorBox>{formState.errors.title?.message}</NN.ErrorBox>
      </NN.PostTitleWrap>
      <NN.PostContentWrap>
        <NN.ContentInput
          placeholder="내용을 작성해주세요."
          {...register("contents")}
          defaultValue={props.data?.contents}
        ></NN.ContentInput>
        <NN.ErrorBox>{formState.errors.contents?.message}</NN.ErrorBox>
      </NN.PostContentWrap>
      <UploadImageFormFB
        data={props.data}
        images={images}
        setImages={setImages}
      />
      <NN.SubmitBtnWrap>
        <NN.CancleBtn type="button" onClick={onClickCancle}>
          취소
        </NN.CancleBtn>
        <NN.SubmitBtn type="submit">
          {props.isEdit ? "수정" : "등록"}
        </NN.SubmitBtn>
      </NN.SubmitBtnWrap>
    </NN.MainWrap>
  );
};

export default NoticeNew;
