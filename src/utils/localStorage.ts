export const addInLocalStorage = (keyName: string, value: unknown): void => {
  const getLocalStorage = localStorage.getItem(keyName)!;
  const getListEmployee = JSON.parse(getLocalStorage!);
  getListEmployee.push(value);
  localStorage.setItem(keyName, JSON.stringify(getListEmployee));
};

export const getEmployeeList = () => {
  const getLocalStorage = localStorage.getItem('employeesList')!;
  return JSON.parse(getLocalStorage);
};
