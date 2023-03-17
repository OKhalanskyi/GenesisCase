import { useGetAllCoursesQuery } from 'app/store/api/course.api'
import { useGetTokenQuery } from 'app/store/api/token.api'
import { ICourse } from 'models/ICourse'
import queryString from 'query-string'
import {
    createContext,
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export interface IPaginationContext {
    totalPages: number
    currentPage: number
    currentCourses: ICourse[] | undefined
}

const defaultState: IPaginationContext = {
    totalPages: 1,
    currentPage: 1,
    currentCourses: [],
}

export const PaginationContext = createContext(defaultState)

type PaginationProviderProps = {
    children: ReactNode
}

const PaginationProvider = (props: PaginationProviderProps) => {
    const { data, isLoading, error } = useGetAllCoursesQuery()
    const location = useLocation()
    const parsedUrl = queryString.parse(location.search)
    const pageParsedUrl = parsedUrl.page ? Number(parsedUrl.page) : 1
    const currentPage = pageParsedUrl
    const coursesPerPage = 10
    const totalPages = Math.ceil((data?.courses.length || 1) / coursesPerPage)
    const lastIndex = currentPage * coursesPerPage
    const firstIndex = currentPage * coursesPerPage - coursesPerPage
    const currentCourses = data?.courses.slice(firstIndex, lastIndex)

    return (
        <PaginationContext.Provider
            value={{ totalPages, currentPage, currentCourses }}
        >
            {props.children}
        </PaginationContext.Provider>
    )
}

export { PaginationProvider }
