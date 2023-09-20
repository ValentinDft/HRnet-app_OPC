/* eslint-disable @typescript-eslint/no-explicit-any */
import SelectMenu from '../SelectMenu/SelectMenu';
import styles from './FormCreateEmployee.module.scss';
import { department, states } from '../../utils/data';
import { useDispatch } from 'react-redux';
import { AppDispatch, openModalReducer } from '../../utils/store';

const FormCreateEmployee = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    const arrayDataForm = [...e.target];

    arrayDataForm.map((element: any) => {
      if (element.nodeName === 'INPUT') {
        console.log(element.value, element.name);
      }
    });
    dispatch(openModalReducer(true));
  };

  return (
    <form
      className={styles['container']}
      onSubmit={(e) => handleSubmitForm(e)}
      method='post'
    >
      <label htmlFor='firstName'>First Name</label>
      <input type='text' name='firstName' />

      <label htmlFor='lastName'>Last Name</label>
      <input type='text' name='lastName' />

      <label htmlFor='dateOfBirth'>Date of Birth</label>
      <input type='text' name='dateOfBirth' />

      <label htmlFor='startDate'>Start Date</label>
      <input type='text' name='startDate' />

      <fieldset className={styles['container-address']}>
        <legend>Address</legend>

        <label htmlFor='street'>Street</label>
        <input type='text' name='street' />

        <label htmlFor='city'>City</label>
        <input type='text' name='city' />

        <label htmlFor='state'>State</label>
        <SelectMenu data={states} id='state' />

        <label htmlFor='zip'>Zip Code</label>
        <input type='number' name='zip' />
      </fieldset>

      <label htmlFor='department'>Department</label>
      <SelectMenu data={department} id='department' />

      <div className={styles['container-button']}>
        <button type='submit'>Save</button>
      </div>
    </form>
  );
};

export default FormCreateEmployee;
