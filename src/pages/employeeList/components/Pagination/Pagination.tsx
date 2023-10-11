// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useDispatch, useSelector } from 'react-redux';
import styles from './pagination.module.scss';
import {
  AppDispatch,
  RootState,
  activePageEmployeeList,
} from '../../../../utils/store';

const Pagination = () => {
  const tableEmployee = useSelector(
    (state: RootState) => state.dataTableCurrentEmployee
  );
  const dispatch = useDispatch<AppDispatch>();
  const tableLength = tableEmployee.valueOrigine?.length;
  const filterTableLength = tableEmployee.length;
  const numberOfPage = Math.ceil(tableLength / filterTableLength) || 1;
  const array = [...Array(numberOfPage)];

  const previousPage = () => {
    if (tableEmployee.activePage > 1) {
      dispatch(activePageEmployeeList(tableEmployee.activePage - 1));
    }
  };

  const nextPage = () => {
    if (tableEmployee.activePage < numberOfPage) {
      dispatch(activePageEmployeeList(tableEmployee.activePage + 1));
    }
  };

  return (
    <div className={styles['container']}>
      <span className={styles['button-navigation']} onClick={previousPage}>
        Previous
      </span>
      <div>
        {array.map((element, index) => {
          const page: number = index + 1;
          if (tableEmployee.activePage === page) {
            return (
              <span className={styles['button-pagination-active']} key={index}>
                {page}
              </span>
            );
          } else {
            return (
              <span
                className={styles['button-pagination']}
                key={index}
                onClick={() => dispatch(activePageEmployeeList(page))}
              >
                {page}
              </span>
            );
          }
        })}
      </div>
      <span className={styles['button-navigation']} onClick={nextPage}>
        Next
      </span>
    </div>
  );
};

export default Pagination;
