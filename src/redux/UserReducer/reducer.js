import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLogged: false,
    firstName: '',
    lastName: '',
    _id: '',
    email: '',

}

const User = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateFirstName: (state, action) => {
            state.firstName = action.payload.firstName
        },
        updateLastName: (state, action) => {
            state.lastName = action.payload.lastName
        },
        updateEmail: (state, action) => {
            state.email = action.payload.email
        },
        updateId: (state, action) => {
            state._id = action.payload._id
        },
        updateIsLogged: (state, action) => {
            state.isLogged = action.payload.isLogged
        },
        updateAll: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
            state._id = action.payload._id
            state.isLogged = action.payload.isLogged
        },

        
    },
})

export const { updateFirstName, updateLastName, updateEmail, updateId, updateIsLogged, updateAll } = User.actions

export default User.reducer