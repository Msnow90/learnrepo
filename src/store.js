import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import studentReducer2, { studentReducer } from './reducers/studentReducer';

import { studentApi } from './serverstate/students';

console.log('studentRed: ', studentReducer)

export const store = configureStore({

    reducer: {
        student: studentReducer2,
        [studentApi.reducerPath]: studentApi.reducer
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(studentReducer.middleware)
    }

});