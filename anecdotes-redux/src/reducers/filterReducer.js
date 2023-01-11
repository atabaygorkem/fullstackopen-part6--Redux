import { createSlice } from "@reduxjs/toolkit"

const initialState = { filterStr: "" }

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action) {
      console.log(action);
      state.filterStr = action.payload
    }
  }
})

export const {setFilter} = filterSlice.actions
export default filterSlice.reducer