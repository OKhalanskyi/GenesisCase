import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import { Container } from '@mui/material'

const styles = {
    container: {
        paddingTop: 16,
        paddingBottom: 16,
    },
}

const Header = () => {
    return (
        <AppBar
            position="absolute"
            color="transparent"
            elevation={0}
            sx={{
                position: 'relative',
                borderBottom: (t) => `1px solid black`,
            }}
        >
            <Container style={styles.container}>
                <Typography variant="h6" color="inherit" noWrap>
                    Genesis Case
                </Typography>
            </Container>
        </AppBar>
    )
}

export default Header
