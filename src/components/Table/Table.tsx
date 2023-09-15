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
        <tr>
          <td className={styles['table-body-element']}>Val</td>
          <td className={styles['table-body-element']}>D</td>
          <td className={styles['table-body-element']}>ezfez</td>
          <td className={styles['table-body-element']}>dzad</td>
          <td className={styles['table-body-element']}>dzazd</td>
          <td className={styles['table-body-element']}>zadza</td>
          <td className={styles['table-body-element']}>dzzd</td>
          <td className={styles['table-body-element']}>dzad</td>
          <td className={styles['table-body-element']}>dzzd</td>
        </tr>
        <tr>
          <td className={styles['table-body-element']}>Val</td>
          <td className={styles['table-body-element']}>D</td>
          <td className={styles['table-body-element']}>ezfez</td>
          <td className={styles['table-body-element']}>dzad</td>
          <td className={styles['table-body-element']}>dzazd</td>
          <td className={styles['table-body-element']}>zadza</td>
          <td className={styles['table-body-element']}>dzzd</td>
          <td className={styles['table-body-element']}>dzad</td>
          <td className={styles['table-body-element']}>dzzd</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
