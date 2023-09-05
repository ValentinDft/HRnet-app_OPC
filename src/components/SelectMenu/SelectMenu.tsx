import { useState } from 'react';
import styles from './SelectMenu.module.scss';
import { FaCaretDown } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { AppDispatch, departmentReducer } from '../../store/store.ts';

type propsSelectMenu = {
  data: Array<string>;
};

const SelectMenu = ({ data }: propsSelectMenu) => {
  const [openSelectMenu, setOpenSelectMenu] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(data[0]);
  const dispatch = useDispatch<AppDispatch>();

  const handleSelectValue = (event: MouseEvent): void => {
    setSelectedValue((event.target as HTMLElement).innerText);
    setOpenSelectMenu(!openSelectMenu);
    dispatch(departmentReducer((event.target as HTMLElement).innerText));
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
              <li onClick={(e) => handleSelectValue(e)} key={index}>
                {element}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SelectMenu;
