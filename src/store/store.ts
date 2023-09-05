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
    stateAdress: null,
    zipCodeAdress: null,
    department: 'Sales',
  },
  reducers: {
    departmentReducer: (state, action) => {
      state.department = action.payload;
    },
  },
});

export const { departmentReducer } = createEmployeeSlice.actions;

export const store = configureStore({
  reducer: {
    dataFormCreateEmployee: createEmployeeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;