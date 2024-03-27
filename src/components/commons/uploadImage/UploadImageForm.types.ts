import type { Dispatch, SetStateAction } from "react";
import type { IQuery } from "../../../commons/types/generated/types";

export interface IUploadImagesFormProps {
  data?: Pick<IQuery, "fetchBoard">;
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
}
