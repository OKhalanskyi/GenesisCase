import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom'

interface ICourseItemProps {
    id: string
    title: string
    img: string
    video: string | undefined
}

const CourseItem = (props: ICourseItemProps) => {
    const navigate = useNavigate()

    let intervalId: number
    const [play, setPlay] = useState(false)

    if (props.video === undefined) {
        return <div>no video</div>
    }

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
        if (video && play) {
            setPlay(true)
        } else if (video) {
            setPlay(false)
            console.log(video.getCurrentTime())
        }
    }
    return (
        <div
            style={{ border: '1px solid black' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate(`${props.id}`)}
        >
            {play ? (
                <ReactPlayer
                    ref={handleVideoRef}
                    onReady={() => console.log('122')}
                    url={props.video}
                    loop={true}
                    controls={false}
                    muted={true}
                    playing={play}
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
            ) : (
                <img
                    style={{ width: '100%', height: '100%' }}
                    src={props.img}
                />
            )}
        </div>
    )
}

export default CourseItem
