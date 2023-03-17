import React, { useEffect, useState } from 'react'
import CourseList from 'components/CourseList/CourseList'
import PaginationBar from 'components/PaginationBar/PaginationBar'
import { PaginationProvider } from 'utils/context/pagination.context'
import { useGetTokenQuery } from 'app/store/api/token.api'

const MainPage = () => {
    return (
        <PaginationProvider>
            <CourseList />
            <PaginationBar />
        </PaginationProvider>
    )
}

export default MainPage
