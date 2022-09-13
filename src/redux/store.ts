import { configureStore } from "@reduxjs/toolkit";
import teamReducer from '../redux/teamSlice'
import groupReducer from '../redux/groupSlice'

const store = configureStore({
  reducer: {
    team: teamReducer,
    group: groupReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store