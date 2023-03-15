import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './app/styles/index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from 'app/router/routing'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { store } from 'app/store/store'

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            // Purple and green play nicely together.
            main: '#fff',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
        background: {
            default: '#000000',
            paper: '#000011',
        },
    },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
)
