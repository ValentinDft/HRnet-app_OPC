import { Link } from 'react-router-dom';
import Table from '../../components/Table/Table';
import styles from './EmployeeList.module.scss';

const EmployeeList = () => {
  return (
    <div className={styles['container-page']}>
      <h1>Current Employees</h1>

      <Table />

      <div>
        <span>Showing 1 to 5 of 5 entries</span>
        <span>Previous - Next</span>
      </div>

      <Link to={'/'}>Home</Link>
    </div>
  );
};

export default EmployeeList;
