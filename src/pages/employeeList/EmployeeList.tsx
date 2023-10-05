import { Link } from 'react-router-dom';
import Table from '../../components/Table/Table';
import styles from './employee-list.module.scss';
import SelectTableLength from './components/SelectTableLength/SelectTableLength';
import SearchTable from './components/SearchTable/SearchTable';
import DisplayEntries from './components/DisplayEntries/DisplayEntries';
import Pagination from './components/Pagination/Pagination';
import { getEmployeeList } from '../../utils/localStorage';
import { useDispatch } from 'react-redux';
import {
  AppDispatch,
  activePageEmployeeList,
  valueOrigineEmployeeList,
} from '../../utils/store';
import { useEffect } from 'react';

const EmployeeList = () => {
  const getListEmployee = getEmployeeList();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(valueOrigineEmployeeList(getListEmployee));
    dispatch(activePageEmployeeList(1));
  }, []);

  return (
    <div className={styles['container-page']}>
      <h1>Current Employees</h1>

      <div className={styles['container-filter']}>
        <SelectTableLength />
        <SearchTable />
      </div>

      <Table />

      <div className={styles['container-filter']}>
        <DisplayEntries />
        <Pagination />
      </div>

      <Link to={'/'}>Home</Link>
    </div>
  );
};

export default EmployeeList;
