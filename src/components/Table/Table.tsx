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
  return (
    <table className={styles['table']}>
      <thead>
        <tr>
          {titleHeaderElement.map((title: string) => (
            <TableHeaderElement title={title} />
          ))}
        </tr>
      </thead>
      <tbody>
        <RowBodyElement />
        <RowBodyElement />
        <RowBodyElement />
      </tbody>
    </table>
  );
};

export default Table;
