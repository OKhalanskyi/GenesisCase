import React, { useState, useEffect, useContext } from 'react'
import { useGetAllCoursesQuery } from 'app/store/api/course.api'
import CourseItem from 'components/CourseItem/CourseItem'
import PaginationBar from 'components/PaginationBar/PaginationBar'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useSelector } from 'react-redux'
import { RootState } from 'app/store/store'
import { PaginationContext } from 'utils/context/pagination.context'

const CourseList = () => {
    const { data, isLoading, error } = useGetAllCoursesQuery()
    const context = useContext(PaginationContext)

    if (isLoading) {
        return <div>loading....</div>
    }

    if (error) {
        return <div>error....</div>
    }

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                width: '100%',
            }}
        >
            {context.currentCourses?.map((course, i) => {
                return (
                    <CourseItem
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        img={`${course.previewImageLink}/cover.webp`}
                        video={`http://127.0.0.1:5173/video/${course?.meta?.courseVideoPreview?.link?.slice(
                            18,
                        )}`}
                    />
                )
            })}
        </div>
    )
}

export default CourseList
