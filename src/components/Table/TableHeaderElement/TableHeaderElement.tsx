/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import styles from './table-header-element.module.scss';
import {
  AppDispatch,
  RootState,
  orderFilterReducer,
  selectedFilterReducer,
} from '../../../utils/store';

type propsTableHeaderElement = {
  title: string;
};

const TableHeaderElement = ({ title }: propsTableHeaderElement) => {
  const filterTableValue = useSelector(
    (state: RootState) => state.dataTableCurrentEmployee
  );
  const dispatch = useDispatch<AppDispatch>();
  let urlImage: string = '';
  const idElement: string = toCamelCase(title);

  const changePictoSort = (filterIsSelected: boolean): void => {
    filterIsSelected
      ? (urlImage = `/assets/picto/sort_${filterTableValue.order}.png`)
      : (urlImage = `/assets/picto/sort_both.png`);
  };
  changePictoSort(filterTableValue.selectedFilter === idElement);

  const handleClickHeaderTable = () => {
    if (filterTableValue.selectedFilter === idElement) {
      if (filterTableValue.order === 'asc') {
        dispatch(orderFilterReducer('desc'));
      } else if (filterTableValue.order === 'desc') {
        dispatch(orderFilterReducer('asc'));
      }
    } else {
      dispatch(selectedFilterReducer(idElement));
      if (filterTableValue.order === 'desc') {
        dispatch(orderFilterReducer('asc'));
      }
    }
  };

  function toCamelCase(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());
  }

  return (
    <th
      className={styles['table-header-element']}
      id={idElement}
      onClick={handleClickHeaderTable}
    >
      {title}
      <span
        className={styles['table-header-icons']}
        style={{ backgroundImage: `url(${urlImage})` }}
      ></span>
    </th>
  );
};

export default TableHeaderElement;
