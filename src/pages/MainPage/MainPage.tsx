import React, { useEffect, useState } from 'react'
import { useGetAllCoursesQuery } from 'app/store/api/course.api'

const MainPage = () => {
    const { data, isLoading, error } = useGetAllCoursesQuery()

    console.log(data)

    return <div>qq</div>
}

export default MainPage
