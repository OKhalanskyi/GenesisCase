import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../../pages/MainPage/MainPage'
import CoursePage from '../../pages/CoursePage/CoursePage'
import Root from 'components/Root/Root'
import { getTokenLoader } from './loaders/getTokenLoader'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        loader: getTokenLoader,
        children: [
            {
                element: <MainPage />,
                index: true,
            },
            {
                path: '/:id',
                element: <CoursePage />,
            },
        ],
    },
])
