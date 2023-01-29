import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: null
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload
			console.log("logged in.....");
		},
		logout: (state) => {
			state.user = null
		}
	},
})

// Action creators are generated for each case reducer function
export const { login, logout } = counterSlice.actions

export default counterSlice.reducer
