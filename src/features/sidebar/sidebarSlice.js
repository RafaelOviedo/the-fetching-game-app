import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    value: false,
  },
  reducers: {
    openSidebar: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value = true
    },
    closeSidebar: (state) => {
      state.value = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { openSidebar, closeSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer