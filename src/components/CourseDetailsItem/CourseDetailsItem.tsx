import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import { useGetCourseByIdQuery } from '../../app/store/api/course.api'
import { ILesson } from '../../models/ICourse'
import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { useLoaderData, useParams } from 'react-router-dom'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LockIcon from '@mui/icons-material/Lock'
import AccordionDetails from '@mui/material/AccordionDetails'

interface ILessonWidget {
    id: string
}

const LessonWidget = (props: ILessonWidget) => {
    const [expanded, setExpanded] = useState<ILesson | false>(false)
    const { data, isLoading, isError } = useGetCourseByIdQuery(props.id)

    const handleChange =
        (lesson: ILesson) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            if (lesson.status === 'unlocked') {
                setExpanded(isExpanded ? lesson : false)
            } else {
                alert('video is locked')
            }
        }

    return (
        <div>
            {data?.lessons.map((lesson) => {
                return (
                    <Accordion
                        key={lesson.id}
                        expanded={expanded === lesson}
                        onChange={handleChange(lesson)}
                    >
                        <AccordionSummary
                            expandIcon={
                                lesson.status === 'unlocked' ? (
                                    <ExpandMoreIcon />
                                ) : (
                                    <LockIcon />
                                )
                            }
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                {`Lesson ${lesson.order}`}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                {lesson.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ReactPlayer
                                key={lesson.id}
                                url={`${
                                    import.meta.env.VITE_PROXY_VIDEO
                                }${lesson?.link?.slice(18)}`}
                                loop={false}
                                controls={true}
                                muted={true}
                                playing={false}
                                width="100%"
                                height="auto"
                                config={{
                                    file: {
                                        attributes: {
                                            crossOrigin: 'true',
                                        },
                                    },
                                }}
                            />
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    )
}

export default LessonWidget
