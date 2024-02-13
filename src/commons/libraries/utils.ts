export const getDate = (date: Date): string => {
  const _date = new Date(date);
  const year = _date.getFullYear();
  const month = String(_date.getMonth() + 1).padStart(2, "0");
  const day = String(_date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};

export const sortList = (list: any[]): any[] => {
  const newList = list.sort((a, b) => {
    return (
      new Date(a.data().createdAt).getTime() -
      new Date(b.data().createdAt).getTime()
    );
  });

  return newList;
};
