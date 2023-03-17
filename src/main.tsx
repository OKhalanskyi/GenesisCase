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
    },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <RouterProvider
                    router={router}
                    fallbackElement={<h1>entering</h1>}
                />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
)
