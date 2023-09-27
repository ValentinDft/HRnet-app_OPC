import { useSelector } from 'react-redux';
import RowBodyElement from './RowBodyElement/RowBodyElement';
import styles from './Table.module.scss';
import TableHeaderElement from './TableHeaderElement/TableHeaderElement';
import { RootState } from '../../utils/store';

type employeeType = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  stateAdress: string;
  zip: string;
  department: string;
};

const Table = () => {
  const titleHeaderElement: Array<string> = [
    'First Name',
    'Last Name',
    'Start Date',
    'Department',
    'Date of Birth',
    'Street',
    'City',
    'State',
    'Zip Code',
  ];
  const getLocalStorage = localStorage.getItem('employeesList')!;
  const getListEmployee = JSON.parse(getLocalStorage);
  const filterTableValue = useSelector(
    (state: RootState) => state.dataFilterTableCurrentEmployee
  );
  let filteredTable;

  const filterSearch = (list: Array<employeeType>) => {
    filteredTable = list.filter((employee: employeeType) => {
      const keyValue: Array<string> = Object.keys(employee);
      const data: Array<string> = [];

      keyValue.map((value: string) => {
        data.push(employee[value].toLowerCase());
      });

      return data.toString().includes(filterTableValue.search);
    });
  };

  if (filterTableValue.search.length > 0) {
    filterSearch(getListEmployee);
  } else if (filterTableValue.search.length === 0) {
    filteredTable = getListEmployee;
  }

  return (
    <table className={styles['table']}>
      <thead>
        <tr>
          {titleHeaderElement.map((title: string, i: number) => (
            <TableHeaderElement title={title} key={i} />
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredTable?.map((employee: employeeType, i: number) => (
          <RowBodyElement employee={employee} key={i} />
        ))}
        {filteredTable.length === 0 && (
          <tr>
            <th colSpan={9}>No matching records found</th>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
