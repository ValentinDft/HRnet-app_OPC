/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useDispatch, useSelector } from 'react-redux';
import {
  AppDispatch,
  RootState,
  valueEmployeeList,
} from '../../../../utils/store';
import { getEmployeeList } from '../../../../utils/localStorage';
import { useEffect } from 'react';

const DisplayEntries = () => {
  const getListEmployee = getEmployeeList();
  const filterTableValue = useSelector(
    (state: RootState) => state.dataTableCurrentEmployee
  );
  const dispatch = useDispatch<AppDispatch>();
  const tableLength: number = filterTableValue.length;
  const selectedPage: number = filterTableValue.activePage;
  let displayLength: number;

  useEffect(() => {
    dispatch(
      valueEmployeeList(pagination(getListEmployee, selectedPage, tableLength))
    );
  }, [selectedPage, tableLength]);

  if (tableLength < getListEmployee.length) {
    displayLength = filterTableValue.value ? filterTableValue.value.length : 0;
  } else {
    displayLength = getListEmployee.length;
  }

  const pagination = (
    arrayOfItems: Array<object>,
    page: number = 1,
    itemsPerPage: number = 10
  ) => arrayOfItems.slice(itemsPerPage * (page - 1), itemsPerPage * page);

  return (
    <span>
      Showing 1 to {displayLength} of {getListEmployee.length} entries
    </span>
  );
};

export default DisplayEntries;
