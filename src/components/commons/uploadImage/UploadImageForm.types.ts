import type { Dispatch, SetStateAction } from "react";

export interface IUploadImagesFormProps {
  prevImages?: string[] | undefined | null;
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
}
