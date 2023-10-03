/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';
import RowBodyElement from './RowBodyElement/RowBodyElement';
import styles from './Table.module.scss';
import TableHeaderElement from './TableHeaderElement/TableHeaderElement';
import { RootState } from '../../utils/store';
import { useEffect, useState } from 'react';

type employeeType = {
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
  const filterTableValue = useSelector(
    (state: RootState) => state.dataTableCurrentEmployee
  );
  const [filteredTable, setFilteredTable] = useState<object[] | any>([]);

  useEffect(() => {
    setFilteredTable(filterTableValue?.value);
  }, [filterTableValue?.value]);

  useEffect(() => {
    if (filterTableValue.search.length > 0) {
      const search = filterBySearch(filterTableValue?.value);
      setFilteredTable(search);
    } else if (filterTableValue.search.length === 0) {
      setFilteredTable(filterTableValue?.value);
    }
  }, [filterTableValue?.search]);

  useEffect(() => {
    const filter = filterByTitleHeader(
      filterTableValue.selectedFilter,
      filterTableValue.order
    );
    setFilteredTable(filter);
  }, [filterTableValue.selectedFilter, filterTableValue.order]);

  const filterBySearch = (list: Array<employeeType>) => {
    const filterSearch = list?.filter((employee: employeeType) => {
      const keyValue: Array<string> = Object.keys(employee);
      const data: Array<string> = [];

      keyValue.map((value: string) => {
        data.push(employee[value].toLowerCase());
      });

      return data.toString().includes(filterTableValue.search);
    });
    return filterSearch;
  };

  const filterByTitleHeader = (titleHeader: string, sortOrder: string) => {
    if (sortOrder === 'asc') {
      return [...filteredTable].sort((a: employeeType, b: employeeType) =>
        a[titleHeader].localeCompare(b[titleHeader])
      );
    } else if (sortOrder === 'desc') {
      return [...filteredTable].sort((a: employeeType, b: employeeType) =>
        b[titleHeader].localeCompare(a[titleHeader])
      );
    }
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
