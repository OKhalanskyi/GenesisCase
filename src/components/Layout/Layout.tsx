import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Container, useTheme } from '@mui/material'

const Layout = () => {
    const them = useTheme()
    console.log(them)

    return (
        <Box>
            <Container maxWidth={'lg'} sx={{ bgcolor: '#000034' }}>
                <Outlet />
            </Container>
        </Box>
    )
}

export default Layout
