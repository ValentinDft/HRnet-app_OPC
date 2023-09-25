import { useDispatch } from 'react-redux';
import { AppDispatch, tableLengthReducer } from '../../../../utils/store';
import { ChangeEvent } from 'react';

const SelectTableLength = () => {
  const dispatch = useDispatch<AppDispatch>();

  const changeTableLength = (e: ChangeEvent) => {
    dispatch(tableLengthReducer(Number((e.target as HTMLSelectElement).value)));
  };

  return (
    <label>
      Show{' '}
      <select
        name='employee-table_length'
        onChange={(e) => changeTableLength(e)}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>{' '}
      entries
    </label>
  );
};
export default SelectTableLength;
