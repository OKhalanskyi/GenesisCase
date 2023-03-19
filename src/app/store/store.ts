import { configureStore } from '@reduxjs/toolkit'
import { courseApi } from '../../app/store/api/course.api'
import { authApi } from './api/token.api'

export const store = configureStore({
    reducer: {
        [courseApi.reducerPath]: courseApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            courseApi.middleware,
            authApi.middleware,
        ]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
