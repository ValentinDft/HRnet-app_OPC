import { useDispatch } from 'react-redux';
import { AppDispatch, tableSearchReducer } from '../../../../utils/store';
import { ChangeEvent } from 'react';

const SearchTable = () => {
  const dispatch = useDispatch<AppDispatch>();

  const searchOnTable = (e: ChangeEvent) => {
    dispatch(tableSearchReducer((e.target as HTMLInputElement).value));
  };

  return (
    <label>
      Search: <input type='search' onChange={(e) => searchOnTable(e)} />
    </label>
  );
};

export default SearchTable;
