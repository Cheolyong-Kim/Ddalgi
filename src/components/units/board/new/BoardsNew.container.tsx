import type { ChangeEvent } from "react";

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import BoardsNewUI from "./BoardsNew.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "../../../../commons/queries";

import type { IUpdateBoardInput, IBoardsNewProps } from "./BoardsNew.types";
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import type { Address } from "react-daum-postcode";

const BoardsNew = (
  props: Pick<IBoardsNewProps, "data" | "isEdit">,
): JSX.Element => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [boardAddress, setBoardAddress] = useState({
    zipcode: "",
    address: "",
    addressDetail: "",
  });

  const [nameError, setNameError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const [btnDisable, setBtnDisable] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const router = useRouter();

  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }

    if (event.target.value && pwd && title && content) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  };

  const onChangePwd = (event: ChangeEvent<HTMLInputElement>): void => {
    setPwd(event.target.value);
    if (event.target.value !== "") {
      setPwdError("");
    }

    if (name && event.target.value && title && content) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if (name && pwd && event.target.value && content) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  };

  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContent(event.target.value);
    if (event.target.value !== "") {
      setContentError("");
    }

    if (name && pwd && title && event.target.value) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>): void => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeAddressDetail = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setBoardAddress({ ...boardAddress, addressDetail: event.target.value });
  };

  const onClickSubmitBtn = async (): Promise<void> => {
    if (!name) {
      setNameError("작성자를 입력하세요.");
    }

    if (!pwd) {
      setPwdError("비밀번호를 입력하세요.");
    }

    if (!title) {
      setTitleError("글제목을 입력하세요.");
    }

    if (!content) {
      setContentError("내용을 입력하세요.");
    }

    if (name && pwd && title && content) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: name,
              password: pwd,
              title,
              contents: content,
              youtubeUrl,
              boardAddress,
            },
          },
        });

        void router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickUpdate = async (): Promise<void> => {
    if (!title && !content) {
      alert("수정할 내용을 입력하세요");
      return;
    }

    if (!pwd) {
      alert("패스워드를 입력하세요");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (content) updateBoardInput.contents = content;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (boardAddress) updateBoardInput.boardAddress = boardAddress;

    try {
      if (typeof router.query.id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          password: pwd,
          boardId: router.query.id,
        },
      });

      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onToggleModal = (): void => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    setBoardAddress({
      zipcode: data.zonecode,
      address: data.address,
      addressDetail: "",
    });
    setIsModalOpen((prev) => !prev);
  };

  return (
    <BoardsNewUI
      nameError={nameError}
      pwdError={pwdError}
      titleError={titleError}
      contentError={contentError}
      btnDisable={btnDisable}
      zipcode={boardAddress?.zipcode}
      address={boardAddress?.address}
      onChangeName={onChangeName}
      onChangePwd={onChangePwd}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickSubmitBtn={onClickSubmitBtn}
      onClickUpdate={onClickUpdate}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      isEdit={props.isEdit}
      isModalOpen={isModalOpen}
      data={props.data}
    />
  );
};

export default BoardsNew;
