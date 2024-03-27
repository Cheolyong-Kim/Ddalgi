import * as U from "./UploadImageFormFB.styles";
import { type ChangeEvent, useEffect, useRef, type MouseEvent } from "react";
import { useMutationUploadFile } from "../../../commons/hooks/useMutation";
import type { IUploadImagesFormFBProps } from "./UploadImageFormFB.types";
import { checkValidationFile } from "../../../commons/libraries/utils";

const UploadImageFormFB = (props: IUploadImagesFormFBProps): JSX.Element => {
  const [uploadFile] = useMutationUploadFile();

  const imageFileRef = useRef<HTMLInputElement>(null);
  const imageFileUpdateRef = useRef<null[] | HTMLInputElement[]>([]);

  useEffect(() => {
    if (props.data?.images) props.setImages(props.data.images);
  }, [props.data]);

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
    const newImages = [...props.images];
    newImages[Number(event.target.id)] = result.data?.uploadFile.url ?? "";

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
                  id={String(index)}
                  src={`https://storage.googleapis.com/${el}`}
                  onClick={onClickUpdateImage}
                />
                <U.AttachInput
                  id={String(index)}
                  type="file"
                  onChange={onUpdateImage}
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

export default UploadImageFormFB;
