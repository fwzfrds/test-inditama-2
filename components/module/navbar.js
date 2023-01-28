import * as React from 'react';
import { useRouter } from 'next/router'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import StoreIcon from '@mui/icons-material/Store';
import { logout } from '../../pages/api/auth'
import swal from 'sweetalert';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
    const router = useRouter()

    const handleLogout = () => {
        swal({
            title: "Warning",
            text: `Are you sure want to logout?`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(async (isOkay) => {
            if (isOkay) {
                try {
                    const response = await logout()
                    if (response.status == true) {
                        localStorage.removeItem('authToken')
                    }

                    router.push('/auth/login')

                    swal({
                        title: "Succes",
                        text: "Logout Successful!",
                        icon: "success",
                        timer: 2000
                    })

                } catch (error) {
                    swal({
                        title: "Error",
                        text: `Error while logging out!`,
                        icon: "error",
                        timer: 2000
                    });
                }
            }
        })
    }

    return (
        <Box sx={{ flexGrow: 1, marginBottom: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <StoreIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Tienda
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => handleLogout()}
                    >
                        <LogoutIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar