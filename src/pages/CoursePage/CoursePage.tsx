import Typography from '@mui/material/Typography'
import { useGetCourseByIdQuery } from '../../app/store/api/course.api'
import LessonWidget from '../../components/CourseDetailsItem/CourseDetailsItem'
import SkeletonDetails from '../../components/Skeleton/SkeletonDetails'
import { ICourseDetails } from '../../models/ICourse'
import React from 'react'
import ReactPlayer from 'react-player'
import { useLoaderData, useNavigation, useParams } from 'react-router-dom'
import styles from './coursePage.module.scss'

const CoursePage = () => {
    const { id } = useParams<{ id?: string }>()
    const { data, isLoading, isError } = useGetCourseByIdQuery(id || '')

    if (isLoading) {
        return <SkeletonDetails />
    }

    if (isError) {
        return <>Error</>
    }

    return (
        <div className={styles.coursePageBlock}>
            <Typography variant="h3">{data?.description}</Typography>
            <Typography variant="h4">
                You will gain the following skills:
            </Typography>
            {data?.meta.skills.map((skill, i) => (
                <Typography key={i}>-{skill}</Typography>
            ))}
            <LessonWidget id={id ? id : ''} />
        </div>
    )
}

export default CoursePage
