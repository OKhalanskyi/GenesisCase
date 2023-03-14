import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/styles/index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from 'app/router/routing'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
