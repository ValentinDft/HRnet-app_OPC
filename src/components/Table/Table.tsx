import RowBodyElement from './RowBodyElement/RowBodyElement';
import styles from './Table.module.scss';
import TableHeaderElement from './TableHeaderElement/TableHeaderElement';

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
        {getListEmployee?.map((employee: employeeType, i: number) => (
          <RowBodyElement employee={employee} key={i} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
