import { configureStore } from "@reduxjs/toolkit";
import teamReducer from '../redux/teamSlice'

const store = configureStore({
  reducer: {
    team: teamReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store