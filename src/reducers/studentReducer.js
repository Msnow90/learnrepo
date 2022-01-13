import { createSlice, createReducer } from '@reduxjs/toolkit'

const initialState = {
    value: {},
};

export const studentReducer = createReducer(initialState, {
    set: (state, action) => {
        return { ...state, ...action.payload }
    },
    update: (state, action) => {
        return {
            ...state,
            [action.fieldName]: action.value
        }
    },


    middleware: ({ dispatch, getState }) => {
        console.log('dispatch: ', dispatch)
        console.log('getState: ', getState);
        return (next) => {
            console.log('next: ', next)
        }
    }
});

console.log('sr: ', studentReducer);

export const { actions, reducer } = studentReducer;

export const { set, update } = actions;

export default reducer;

// export const studentSlice = createSlice({
//     name: 'student',
//     initialState,
//     reducers: {
//         set: (state, action) => {
//             return { ...state, ...action.payload }
//         },
//         update: (state, action) => {
//             return {
//                 ...state,
//                 [action.fieldName]: action.value
//             }
//         }
//     },
//     middleware: ({ dispatch, getState }) => {
//         console.log('dispatch: ', dispatch)
//         console.log('getState: ', getState);
//         return (next) => {
//             console.log('next: ', next)
//         }
//     }
// });

// export const { actions, reducer } = studentSlice;

// export const { set, update } = actions;

// export default reducer;