import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles['container']}>
      <h1>HRnet</h1>
      <Link to={'/employee-list'}>View Current Employees</Link>
      <h2>Create Employee</h2>
    </div>
  );
};

export default Home;
