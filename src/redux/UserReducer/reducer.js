import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    auth:'',
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
        updateAuth: (state, action) => {
            state.auth = action.payload.auth
        },
        updateAll: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
            state._id = action.payload._id
            state.auth = action.payload.auth
        },
        logoutUser: (state, action) => {
            return {
                ...initialState,
                email: state.email
            }
        }

        
    },
})

export const { updateFirstName, updateLastName, updateEmail, updateId, updateAuth, updateAll,logoutUser } = User.actions

export default User.reducer