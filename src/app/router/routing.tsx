import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../../pages/MainPage/MainPage'
import CoursePage from '../../pages/CoursePage/CoursePage'
import Layout from 'components/Layout/Layout'

import { getAllCoursesLoader } from 'app/router/loaders/getAllCoursesLoader'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                element: <MainPage />,
                index: true,
                loader: getAllCoursesLoader,
            },
            {
                path: '/:id',
                element: <CoursePage />,
            },
        ],
    },
])
