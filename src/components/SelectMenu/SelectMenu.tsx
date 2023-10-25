import { useEffect, useState } from 'react';
import styles from './select-menu.module.scss';
import { FaCaretDown } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {
  AppDispatch,
  departmentReducer,
  stateReducer,
} from '../../utils/store.ts';

type objectData = {
  name: string;
};

type propsSelectMenu = {
  data: Array<objectData>;
  id: string;
  inputValue: (value: string) => void;
};

const SelectMenu = ({ data, id, inputValue }: propsSelectMenu) => {
  const [openSelectMenu, setOpenSelectMenu] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(data[0].name);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    inputValue(selectedValue);
  }, [selectedValue, inputValue]);

  const handleSelectValue = (event: React.MouseEvent<HTMLLIElement>): void => {
    setSelectedValue((event.target as HTMLElement).innerText);
    setOpenSelectMenu(!openSelectMenu);

    id === 'state'
      ? dispatch(stateReducer((event.target as HTMLElement).innerText))
      : dispatch(departmentReducer((event.target as HTMLElement).innerText));
  };

  return (
    <div>
      <div
        className={styles['container-input']}
        onClick={() => setOpenSelectMenu(!openSelectMenu)}
      >
        <span className={styles['item-selected']}>
          {selectedValue} <FaCaretDown />
        </span>
      </div>
      {openSelectMenu && (
        <ul className={styles['container-input-content']}>
          {data.map((element, index) => {
            return (
              <li
                onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                  handleSelectValue(e)
                }
                key={index}
              >
                {element?.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SelectMenu;
