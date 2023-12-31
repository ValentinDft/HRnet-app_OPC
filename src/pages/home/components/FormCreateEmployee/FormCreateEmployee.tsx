/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './form-create-employee.module.scss';
import { department, states } from '../../../../utils/data';
import { useDispatch } from 'react-redux';
import {
  AppDispatch,
  modalCreateEmployeeReducer,
  otherInformationReducer,
} from '../../../../utils/store';
import DatePicker from '../../../../components/DatePicker/DatePicker';
import { formatDate } from '../../../../utils/formatDate';
import { SelectMenu } from 'react-select-menu-valentindft';
// import SelectMenu from '../../../../components/SelectMenu/SelectMenu';

const FormCreateEmployee = () => {
  const dispatch = useDispatch<AppDispatch>();
  let stateInput: string;
  let departmentInput: string;

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    const arrayDataForm = [...e.target];
    checkErrorInputValue(arrayDataForm);
  };

  const checkErrorInputValue = (inputData: Array<object>) => {
    const errorForm: Array<string> = [];
    const dataForm: any = {};

    inputData.map((element: any) => {
      if (element.nodeName === 'INPUT') {
        if (element.value === '') {
          errorForm.push(element.name);
        } else {
          dataForm[element.name] = element.value;
        }
      }
    });

    if (errorForm.length >= 1) {
      dispatch(modalCreateEmployeeReducer({ open: true, errorForm }));
    } else {
      dataForm.dateOfBirth = formatDate(dataForm.dateOfBirth);
      dataForm.startDate = formatDate(dataForm.startDate);
      dataForm.state = stateInput;
      dataForm.department = departmentInput;
      dispatch(modalCreateEmployeeReducer({ open: true, errorForm: [] }));
      dispatch(otherInformationReducer(dataForm));
    }
  };

  const valueInputState = (value: string) => {
    stateInput = value;
  };

  const valueInputDepartment = (value: string) => {
    departmentInput = value;
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
      <DatePicker id='dateOfBirth' type='date' />

      <label htmlFor='startDate'>Start Date</label>
      <DatePicker id='startDate' type='date' />

      <fieldset className={styles['container-address']}>
        <legend>Address</legend>

        <label htmlFor='street'>Street</label>
        <input type='text' name='street' />

        <label htmlFor='city'>City</label>
        <input type='text' name='city' />

        <label htmlFor='state'>State</label>
        <SelectMenu data={states} id='state' inputValue={valueInputState} />

        <label htmlFor='zip'>Zip Code</label>
        <input type='number' name='zipCode' />
      </fieldset>

      <label htmlFor='department'>Department</label>
      <SelectMenu
        data={department}
        id='department'
        inputValue={valueInputDepartment}
      />

      <div className={styles['container-button']}>
        <button type='submit'>Save</button>
      </div>
    </form>
  );
};

export default FormCreateEmployee;
