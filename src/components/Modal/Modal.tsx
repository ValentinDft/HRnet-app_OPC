import styles from './Modal.module.scss';
import { AppDispatch, openModalReducer } from '../../utils/store';
import { useDispatch } from 'react-redux';

const Modal = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className={styles['container']} role='modal'>
      <div className={styles['modal']}>
        <span
          className={styles['close']}
          onClick={() => dispatch(openModalReducer(false))}
        >
          &times;
        </span>
        <p>Employee Created!</p>
      </div>
    </div>
  );
};

export default Modal;
