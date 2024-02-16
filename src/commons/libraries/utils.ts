import type { DocumentData } from "@firebase/firestore-types";

export const getDate = (date: Date): string => {
  const _date = new Date(date);
  const year = _date.getFullYear();
  const month = String(_date.getMonth() + 1).padStart(2, "0");
  const day = String(_date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};

export const sortList = (list: DocumentData[]): DocumentData[] => {
  const newList = list.sort((a, b) => {
    return (
      new Date(a.data().createdAt).getTime() -
      new Date(b.data().createdAt).getTime()
    );
  });

  return newList;
};

export const checkValidationFile = (file: File): boolean => {
  if (typeof file === "undefined") {
    alert("파일이 존재하지 않습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다. (5MB 제한)");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg파일이나 png파일만 업로드할 수 있습니다.");
    return false;
  }

  return true;
};
