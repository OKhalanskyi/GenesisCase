import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './app/styles/index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/routing'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { store } from './app/store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<h1>entering</h1>} />
    </Provider>,
)
