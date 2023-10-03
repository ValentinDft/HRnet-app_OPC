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
    state: 'Alabama',
    zipCode: null,
    department: 'Sales',
  },
  reducers: {
    departmentReducer: (state, action) => {
      state.department = action.payload;
    },
    stateReducer: (state, action) => {
      state.state = action.payload;
    },
    otherInformationReducer: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.startDate = action.payload.startDate;
      state.street = action.payload.street;
      state.city = action.payload.city;
      state.zipCode = action.payload.zipCode;

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

const tableCurrentEmployeeSlice = createSlice({
  name: 'tableCurrentEmployee',
  initialState: {
    length: 10,
    search: '',
    selectedFilter: 'firstName',
    order: 'asc',
    value: null,
    activePage: 0,
    valueOrigine: null,
  },
  reducers: {
    tableLengthReducer: (state, action) => {
      state.length = action.payload;
    },
    tableSearchReducer: (state, action) => {
      state.search = action.payload;
    },
    selectedFilterReducer: (state, action) => {
      state.selectedFilter = action.payload;
    },
    orderFilterReducer: (state, action) => {
      state.order = action.payload;
    },
    valueEmployeeList: (state, action) => {
      state.value = action.payload;
    },
    valueOrigineEmployeeList: (state, action) => {
      state.valueOrigine = action.payload;
    },
    activePageEmployeeList: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { departmentReducer, stateReducer, otherInformationReducer } =
  createEmployeeSlice.actions;
export const { openModalReducer: modalCreateEmployeeReducer } =
  modalCreateEmployeeSlice.actions;
export const {
  tableLengthReducer,
  tableSearchReducer,
  selectedFilterReducer,
  orderFilterReducer,
  valueEmployeeList,
  activePageEmployeeList,
  valueOrigineEmployeeList,
} = tableCurrentEmployeeSlice.actions;

export const store = configureStore({
  reducer: {
    dataFormCreateEmployee: createEmployeeSlice.reducer,
    dataModalCreateEmployee: modalCreateEmployeeSlice.reducer,
    dataTableCurrentEmployee: tableCurrentEmployeeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
