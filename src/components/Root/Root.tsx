import React, { useEffect } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Box, Container, useTheme } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Header from '../../components/Header/Header'
import { useGetTokenQuery } from '../../app/store/api/token.api'

const Root = () => {
    return (
        <>
            <Header />
            <Container maxWidth={'lg'} style={{ marginTop: '50px' }}>
                <Outlet />
            </Container>
        </>
    )
}

export default Root
