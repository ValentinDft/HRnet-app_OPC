import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import FormCreateEmployee from '../../components/FormCreateEmployee/FormCreateEmployee';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/store';
import Modal from '../../components/Modal/Modal';

const Home = () => {
  const openModalState = useSelector((state: RootState) => state.openModal);
  return (
    <div className={styles['container']}>
      <h1>HRnet</h1>
      <Link to={'/employee-list'}>View Current Employees</Link>
      <h2>Create Employee</h2>
      <FormCreateEmployee />
      {openModalState && <Modal />}
    </div>
  );
};

export default Home;
