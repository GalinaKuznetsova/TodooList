import { tasksReducer } from "features/TodolistsList/tasksSlice"
import { todolistsReducer } from "features/TodolistsList/todolistsSlice"

import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { appReducer } from "app/appSlice"
import { authReducer } from "features/Login/authSlice"
import { configureStore, UnknownAction } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    todolists: todolistsReducer,
    app: appReducer,
    auth: authReducer,
  },
})

export type AppRootStateType = ReturnType<typeof store.getState>

// ❗ UnknownAction вместо AnyAction
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, UnknownAction>

// export type AppDispatch = typeof store.dispatch
// ❗ UnknownAction вместо AnyAction
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, UnknownAction>
