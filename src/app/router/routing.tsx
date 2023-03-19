import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../../pages/MainPage/MainPage'
import CoursePage from '../../pages/CoursePage/CoursePage'
import Root from '../../components/Root/Root'
import { getTokenLoader } from './loaders/getTokenLoader'
import { getAllCoursesLoader } from './loaders/getAllCoursesLoader'
import { ROUTES } from './routes'
import { getCourseByIdLoader } from './loaders/getCourseByIdLoader'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'

export const router = createBrowserRouter([
    {
        path: ROUTES.root,
        element: <Root />,
        loader: getTokenLoader,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <MainPage />,
                index: true,
            },
            {
                path: ':id',
                element: <CoursePage />,
                errorElement: <h1>error</h1>,
            },
        ],
    },
])
