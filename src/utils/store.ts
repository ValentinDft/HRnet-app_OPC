import { createSlice, configureStore } from '@reduxjs/toolkit';

const createEmployeeSlice = createSlice({
  name: 'FormCreateEmployee',
  initialState: {
    firstName: null,
    lastName: null,
    dateBirth: null,
    startDate: null,
    streetAdress: null,
    cityAdress: null,
    stateAdress: 'Alabama',
    zipCodeAdress: null,
    department: 'Sales',
  },
  reducers: {
    departmentReducer: (state, action) => {
      state.department = action.payload;
    },
    stateReducer: (state, action) => {
      state.stateAdress = action.payload;
    },
  },
});

const openModalSlice = createSlice({
  name: 'openModal',
  initialState: false,
  reducers: {
    openModalReducer: (state, action) => {
      return action.payload;
    },
  },
});

export const { departmentReducer, stateReducer } = createEmployeeSlice.actions;
export const { openModalReducer } = openModalSlice.actions;

export const store = configureStore({
  reducer: {
    dataFormCreateEmployee: createEmployeeSlice.reducer,
    openModal: openModalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
