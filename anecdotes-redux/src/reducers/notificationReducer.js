import { createSlice } from "@reduxjs/toolkit"

const initialState = { text: ""}


const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      state.text = action.payload
    },
    removeNotification(state, action) {
      // if (action.payload === state.id) 
        state.text = ""
    }
  }
})

export const applyNotification = (notStr, timeout) => {
  // console.log(timeout);
  return dispatch => {
    dispatch(setNotification(notStr))
    setTimeout(() => dispatch(removeNotification()), timeout * 1000)
  }
}

export const {setNotification, removeNotification} = notificationSlice.actions
export default notificationSlice.reducer
