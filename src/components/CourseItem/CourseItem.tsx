import Typography from '@mui/material/Typography'
import { useGetCourseByIdQuery } from 'app/store/api/course.api'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './courseItem.module.scss'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'

interface ICourseItemProps {
    id: string
    title: string
    img: string
    video: string | null
    lessonsCount: number
    rating: number
}

const CourseItem = (props: ICourseItemProps) => {
    const navigate = useNavigate()

    let intervalId: number
    const [play, setPlay] = useState(false)

    const handleMouseEnter = () => {
        intervalId = setInterval(() => {
            setPlay(true)
            clearInterval(intervalId)
        }, 1400)
    }

    const handleMouseLeave = () => {
        setPlay(false)
        clearInterval(intervalId)
    }

    const handleVideoRef = (video: ReactPlayer | null) => {
        if (video !== null && play) {
            setPlay(true)
        } else if (video) {
            setPlay(false)
        }
    }

    return (
        <NavLink
            to={`/${props.id}`}
            className={styles.courseItemBlock}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.courseItemPreview}>
                {props.video && play ? (
                    <ReactPlayer
                        ref={handleVideoRef}
                        url={props.video}
                        loop={true}
                        controls={false}
                        muted={true}
                        playing={play}
                        width="100%"
                        height="100%"
                        config={{
                            file: {
                                attributes: {
                                    crossOrigin: 'true',
                                },
                            },
                        }}
                    />
                ) : (
                    <img className={styles.imagePreview} src={props.img} />
                )}
            </div>
            {!play ? (
                <div className={styles.courseItemDescription}>
                    <Typography
                        align="left"
                        color="inherit"
                        noWrap
                        sx={{ width: '70%' }}
                    >
                        {props.title}
                    </Typography>
                    <Rating
                        value={props.rating}
                        precision={0.5}
                        readOnly
                        emptyIcon={
                            <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                            ></StarIcon>
                        }
                    />
                </div>
            ) : null}
        </NavLink>
    )
}

export default CourseItem
