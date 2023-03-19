import Skeleton from '@mui/material/Skeleton'
import React from 'react'

const SkeletonList = () => {
    return (
        <>
            <div style={{ height: '100%', aspectRatio: '1.77/1' }}>
                <Skeleton variant="rectangular" height="100%" />
            </div>
            <div style={{ height: '100%', aspectRatio: '1.77/1' }}>
                <Skeleton variant="rectangular" height="100%" />
            </div>
            <div style={{ height: '100%', aspectRatio: '1.77/1' }}>
                <Skeleton variant="rectangular" height="100%" />
            </div>
            <div style={{ height: '100%', aspectRatio: '1.77/1' }}>
                <Skeleton variant="rectangular" height="100%" />
            </div>
            <div style={{ height: '100%', aspectRatio: '1.77/1' }}>
                <Skeleton variant="rectangular" height="100%" />
            </div>
            <div style={{ height: '100%', aspectRatio: '1.77/1' }}>
                <Skeleton variant="rectangular" height="100%" />
            </div>
        </>
    )
}

export default SkeletonList
