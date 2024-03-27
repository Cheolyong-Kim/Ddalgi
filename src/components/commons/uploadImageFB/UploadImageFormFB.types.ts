import type { DocumentData } from "@firebase/firestore-types";
import type { Dispatch, SetStateAction } from "react";

export interface IUploadImagesFormFBProps {
  data?: DocumentData;
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
}
