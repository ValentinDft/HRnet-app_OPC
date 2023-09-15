import styles from './TableHeaderElement.module.scss';

type propsTableHeaderElement = {
  title: string;
};

const TableHeaderElement = ({ title }: propsTableHeaderElement) => {
  return (
    <th className={styles['table-header-element']} id={title}>
      {title}
      <span className={styles['table-header-icons']}></span>
    </th>
  );
};

export default TableHeaderElement;
