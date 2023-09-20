import { createSlice, configureStore, current } from '@reduxjs/toolkit';
import { addInLocalStorage } from './localStorage';

const createEmployeeSlice = createSlice({
  name: 'FormCreateEmployee',
  initialState: {
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    startDate: null,
    street: null,
    city: null,
    stateAdress: 'Alabama',
    zip: null,
    department: 'Sales',
  },
  reducers: {
    departmentReducer: (state, action) => {
      state.department = action.payload;
    },
    stateReducer: (state, action) => {
      state.stateAdress = action.payload;
    },
    otherInformationReducer: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.startDate = action.payload.startDate;
      state.street = action.payload.street;
      state.city = action.payload.city;
      state.zip = action.payload.zip;

      addInLocalStorage('employeesList', current(state));
    },
  },
});

const modalCreateEmployeeSlice = createSlice({
  name: 'modalCreateEmployee',
  initialState: { open: false, errorForm: [] },
  reducers: {
    openModalReducer: (_state, action) => {
      return action.payload;
    },
  },
});

export const { departmentReducer, stateReducer, otherInformationReducer } =
  createEmployeeSlice.actions;
export const { openModalReducer: modalCreateEmployeeReducer } =
  modalCreateEmployeeSlice.actions;

export const store = configureStore({
  reducer: {
    dataFormCreateEmployee: createEmployeeSlice.reducer,
    dataModalCreateEmployee: modalCreateEmployeeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
