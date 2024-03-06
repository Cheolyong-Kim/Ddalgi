import type { DocumentData } from "@firebase/firestore-types";

export interface INoticeDetailUIProps {
  data?: DocumentData;
  onClickDelete: () => Promise<void>;
  onClickUpdate: () => void;
}
