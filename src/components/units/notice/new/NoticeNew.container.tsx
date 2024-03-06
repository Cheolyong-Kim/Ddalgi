import {
  type ChangeEvent,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { useRouter } from "next/router";
import { doc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { v4 as uuidv4 } from "uuid";
import { checkValidationFile } from "../../../../commons/libraries/utils";
import { useMutation } from "@apollo/client";
import { UPLOADFILE } from "../../../../commons/queries";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import type {
  INoticeNewProps,
  IUpdateNoticeInputProps,
} from "./NoticeNew.types";
import NoticeNewUI from "./NoticeNew.presenter";

const NoticeNew = (props: INoticeNewProps): JSX.Element => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const [btnDisable, setBtnDisable] = useState(true);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);

  const imageFileRef = useRef<HTMLInputElement>(null);
  const imageFileUpdateRef = useRef<null[] | HTMLInputElement[]>([]);

  const router = useRouter();

  const db = getFirestore(firebaseApp);

  useEffect(() => {
    if (props.data?.images) setImages(props.data.images);
  }, [props.data]);

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);

    if (event.target.value && contents) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);

    if (title && event.target.value) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  };

  const onChangeImage = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0];

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({
      variables: {
        file,
      },
    });

    setImages((prev) => [...prev, result.data?.uploadFile.url ?? ""]);
  };

  const onClickUploadImage = (): void => {
    imageFileRef?.current?.click();
  };

  const onClickUpdateImage = (event: MouseEvent<HTMLImageElement>): void => {
    imageFileUpdateRef?.current[Number(event.currentTarget.id)]?.click();
  };

  const onUpdateImage = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0];
    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({
      variables: {
        file,
      },
    });
    const newImages = [...images];
    newImages[Number(event.target.id)] = result.data?.uploadFile.url ?? "";

    setImages(newImages);
  };

  const onClickCancleBtn = (): void => {
    if (props.data === undefined) void router.push("/notice");
    else {
      if (typeof router.query.id !== "string") return;
      void router.push(`/notice/${router.query.id}`);
    }
  };

  const onClickSubmitBtn = async (): Promise<void> => {
    if (title && contents) {
      try {
        const id = uuidv4();
        void setDoc(doc(db, "Notice", id), {
          writer: "운영자",
          title,
          contents,
          images,
          createdAt: new Date().toString(),
        });

        void router.push(`/notice/${id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickUpdate = async (): Promise<void> => {
    if (!title && !contents) {
      alert("수정할 내용을 입력하세요");
      return;
    }

    const updateNoticeInput: IUpdateNoticeInputProps = {};
    if (title) updateNoticeInput.title = title;
    if (contents) updateNoticeInput.contents = contents;
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
    <NoticeNewUI
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmitBtn={onClickSubmitBtn}
      onChangeImage={onChangeImage}
      onClickUploadImage={onClickUploadImage}
      onClickUpdateImage={onClickUpdateImage}
      onUpdateImage={onUpdateImage}
      onClickCancleBtn={onClickCancleBtn}
      onClickUpdate={onClickUpdate}
      btnDisable={btnDisable}
      images={images}
      imageFileRef={imageFileRef}
      imageFileUpdateRef={imageFileUpdateRef}
      data={props.data}
      isEdit={props.isEdit}
    />
  );
};

export default NoticeNew;
