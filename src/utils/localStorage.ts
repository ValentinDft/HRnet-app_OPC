export const addInLocalStorage = (keyName: string, value: unknown) => {
  const getLocalStorage = localStorage.getItem(keyName)!;
  const getListEmployee = JSON.parse(getLocalStorage!);
  getListEmployee.push(value);
  localStorage.setItem(keyName, JSON.stringify(getListEmployee));
};
