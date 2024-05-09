import { type ChangeEvent, useRef, useEffect } from "react";
import * as U from "./UploadImageForm.styles";
import { checkValidationFile } from "../../../commons/libraries/utils";
import { useMutationUploadFile } from "../../../commons/hooks/useMutation";
import type { IUploadImagesFormProps } from "./UploadImageForm.types";

export const UploadImageForm = (props: IUploadImagesFormProps): JSX.Element => {
  const [uploadFile] = useMutationUploadFile();

  const imageFileRef = useRef<HTMLInputElement>(null);
  const imageFileUpdateRef = useRef<null[] | HTMLInputElement[]>([]);

  useEffect(() => {
    if (props.prevImages) props.setImages(props.prevImages);
  }, [props.prevImages]);

  const onClickUploadImage = (): void => {
    imageFileRef?.current?.click();
  };

  const onClickUpdateImage = (index: number) => (): void => {
    imageFileUpdateRef?.current[Number(index)]?.click();
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

    props.setImages((prev) => [...prev, result.data?.uploadFile.url ?? ""]);
  };

  const onUpdateImage =
    (index: number) =>
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
      const file = event.target.files?.[0];
      const isValid = checkValidationFile(file);
      if (!isValid) return;

      const result = await uploadFile({
        variables: {
          file,
        },
      });
      const newImages = [...props.images];
      newImages[index] = result.data?.uploadFile.url ?? "";

      props.setImages(newImages);
    };

  return (
    <U.AttachImageWrap>
      <U.AttachBtnsWrap>
        {props.images.length !== 0 ? (
          <>
            {props.images.map((el, index) => (
              <U.AttachBtnWrap key={index}>
                <U.AttachBtn
                  src={`https://storage.googleapis.com/${el}`}
                  onClick={onClickUpdateImage(index)}
                />
                <U.AttachInput
                  type="file"
                  onChange={onUpdateImage(index)}
                  ref={(el) => {
                    if (imageFileUpdateRef.current)
                      imageFileUpdateRef.current[index] = el;
                  }}
                />
              </U.AttachBtnWrap>
            ))}
            <U.AttachBtnWrap>
              <U.AttachBtn
                src="/boards/new/uploadbtn.png"
                onClick={onClickUploadImage}
              />
              <U.AttachInput
                type="file"
                onChange={onChangeImage}
                ref={imageFileRef}
              />
            </U.AttachBtnWrap>
          </>
        ) : (
          <U.AttachBtnWrap>
            <U.AttachBtn
              src="/boards/new/uploadbtn.png"
              onClick={onClickUploadImage}
            />
            <U.AttachInput
              type="file"
              onChange={onChangeImage}
              ref={imageFileRef}
            />
          </U.AttachBtnWrap>
        )}
      </U.AttachBtnsWrap>
    </U.AttachImageWrap>
  );
};
