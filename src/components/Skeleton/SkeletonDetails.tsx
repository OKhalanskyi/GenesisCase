import Skeleton from '@mui/material/Skeleton'
import React from 'react'

const SkeletonDetails = () => {
    return (
        <>
            <div style={{ height: '100%', aspectRatio: '5/1' }}>
                <Skeleton variant="rectangular" width="100%" height="90%" />
            </div>
            <div style={{ height: '100%', aspectRatio: '5/1' }}>
                <Skeleton variant="rectangular" width="50%" height="90%" />
            </div>
            <div style={{ height: '100%', aspectRatio: '5/1' }}>
                <Skeleton variant="rectangular" width="100%" height="100%" />
            </div>
        </>
    )
}

export default SkeletonDetails
