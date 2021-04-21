import { createSlice } from '@reduxjs/toolkit'

// Define the slice of the state
const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        fName: 'First',
        lName: 'Last',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
    },
    // Case reducers, better than a switch statement
    reducers: {
        changeFName(state, action) {
            state.fName = action.payload;
        },
        changeLName(state, action) {
            state.lName = action.payload;
        },
        changeEmail(state, action) {
            state.email = action.payload;
        },
        changeSubject(state, action) {
            state.subject = action.payload;
        },
        changeMessage(state, action) {
            state.message = action.payload;
        },
    },
});

// Automatic generated action creators
export const { changeFName, changeLName, changeEmail, changeSubject, changeMessage } = contactSlice.actions;

// Automatic reducer function
export default contactSlice.reducer;
