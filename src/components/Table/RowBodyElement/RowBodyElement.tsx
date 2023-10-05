import styles from './row-body-element.module.scss';

type propsRowBodyElement = {
  employee: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    startDate: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    department: string;
  };
};

const RowBodyElement = ({ employee }: propsRowBodyElement) => {
  return (
    <tr>
      <td className={styles['table-body-element']}>{employee.firstName}</td>
      <td className={styles['table-body-element']}>{employee.lastName}</td>
      <td className={styles['table-body-element']}>{employee.startDate}</td>
      <td className={styles['table-body-element']}>{employee.department}</td>
      <td className={styles['table-body-element']}>{employee.dateOfBirth}</td>
      <td className={styles['table-body-element']}>{employee.street}</td>
      <td className={styles['table-body-element']}>{employee.city}</td>
      <td className={styles['table-body-element']}>{employee.state}</td>
      <td className={styles['table-body-element']}>{employee.zipCode}</td>
    </tr>
  );
};

export default RowBodyElement;
