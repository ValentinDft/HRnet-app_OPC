import styles from './modal.module.scss';
import {
  AppDispatch,
  RootState,
  modalCreateEmployeeReducer,
} from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';

const Modal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const modalCreateEmployee = useSelector(
    (state: RootState) => state.dataModalCreateEmployee
  );

  return (
    <div className={styles['container']} role='modal'>
      <div className={styles['modal']}>
        <span
          className={styles['close']}
          onClick={() =>
            dispatch(modalCreateEmployeeReducer({ open: false, errorForm: [] }))
          }
        >
          &times;
        </span>
        {modalCreateEmployee.errorForm.length >= 1 && (
          <p>Please fill in the following information : </p>
        )}
        {modalCreateEmployee.errorForm?.map((element, i) => {
          return (
            <span key={i} className={styles['error']}>
              {element}{' '}
            </span>
          );
        })}
        {modalCreateEmployee.errorForm.length === 0 && <p>Employee Created!</p>}
      </div>
    </div>
  );
};

export default Modal;
