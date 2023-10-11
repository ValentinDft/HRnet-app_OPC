/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useSelector } from 'react-redux';
import RowBodyElement from './RowBodyElement/RowBodyElement';
import styles from './table.module.scss';
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
  const [filteredTable, setFilteredTable] = useState<object[]>(
    filterTableValue?.value || []
  );

  useEffect(() => {
    setFilteredTable(filterTableValue?.value || []);
  }, [filterTableValue?.value]);

  useEffect(() => {
    if (filterTableValue.search.length > 0) {
      const search = filterBySearch(filterTableValue?.value || []);
      setFilteredTable(search);
    } else if (filterTableValue.search.length === 0) {
      setFilteredTable(filterTableValue?.value || []);
    }
  }, [filterTableValue?.search]);

  useEffect(() => {
    const filter = filterByTitleHeader(
      filterTableValue.selectedFilter,
      filterTableValue.order
    );
    setFilteredTable(filter || []); // add default value of empty array
  }, [filterTableValue.selectedFilter, filterTableValue.order]);

  const filterBySearch = (list: Array<employeeType>) => {
    const filterSearch = list?.filter((employee: employeeType) => {
      const keyValue: Array<any> = Object.keys(employee);
      const data: Array<string> = [];

      keyValue.map((value: keyof employeeType) => {
        data.push(employee[value].toLowerCase());
      });

      return data.some((value) =>
        value.includes(filterTableValue.search.toLowerCase())
      );
    });
    return filterSearch;
  };

  const filterByTitleHeader = (
    titleHeader: keyof employeeType,
    sortOrder: string
  ) => {
    if (sortOrder === 'asc') {
      return [...filteredTable].sort((a: employeeType, b: employeeType) =>
        a[titleHeader].localeCompare(b[titleHeader])
      );
    } else if (sortOrder === 'desc') {
      return [...filteredTable].sort((a: employeeType, b: employeeType) =>
        b[titleHeader].localeCompare(a[titleHeader])
      );
    }
    return filteredTable;
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
