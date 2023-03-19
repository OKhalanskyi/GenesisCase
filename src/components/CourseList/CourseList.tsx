import React, { useState, useEffect, useContext } from 'react'
import { useGetAllCoursesQuery } from '../../app/store/api/course.api'
import CourseItem from '../../components/CourseItem/CourseItem'
import PaginationBar from '../../components/PaginationBar/PaginationBar'
import {
    useLocation,
    useNavigate,
    useNavigation,
    useSearchParams,
} from 'react-router-dom'
import queryString from 'query-string'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store/store'
import { PaginationContext } from '../../utils/context/pagination.context'
import styles from './courseList.module.scss'
import Skeleton from '@mui/material/Skeleton'
import SkeletonList from '../../components/Skeleton/SkeletonList'

const CourseList = () => {
    const context = useContext(PaginationContext)
    const { data, isLoading, isError } = useGetAllCoursesQuery()

    if (isLoading) {
        return (
            <div className={styles.courseListBlock}>
                <SkeletonList />
            </div>
        )
    }

    if (isError) {
        return (
            <h1>
                Sorry its 404 error , but backend devs are tryin so hard to fix
                it (no)
            </h1>
        )
    }

    return (
        <div className={styles.courseListBlock}>
            {context.currentCourses?.map((course, i) => {
                return (
                    <CourseItem
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        rating={course.rating}
                        lessonsCount={course.lessonsCount}
                        img={`${course.previewImageLink}/cover.webp`}
                        video={
                            course?.meta?.courseVideoPreview?.link
                                ? `${
                                      import.meta.env.VITE_PROXY_VIDEO
                                  }${course.meta.courseVideoPreview.link.slice(
                                      18,
                                  )}`
                                : ''
                        }
                    />
                )
            })}
        </div>
    )
}

export default CourseList
