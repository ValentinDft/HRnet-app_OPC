/* eslint-disable @typescript-eslint/no-explicit-any */
import SelectMenu from '../SelectMenu/SelectMenu';
import styles from './FormCreateEmployee.module.scss';
import { dataDepartment } from '../../data/data';

const FormCreateEmployee = () => {
  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    const arrayDataForm = [...e.target];

    arrayDataForm.map((element: any) => {
      if (element.nodeName === 'INPUT') {
        console.log(element.value, element.name);
      }
    });
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
        <input type='text' name='state' />

        <label htmlFor='zip'>Zip Code</label>
        <input type='text' name='zip' />
      </fieldset>

      <label htmlFor='department'>Department</label>
      <SelectMenu data={dataDepartment} />

      <div>
        <button type='submit'>Save</button>
      </div>
    </form>
  );
};

export default FormCreateEmployee;
