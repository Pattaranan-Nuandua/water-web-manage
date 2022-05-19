import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Menu() {
    return (
        <Box>
            <AppBar style={{background: '#2B4586',
                            display: 'fixed',
                            position: 'absolute',
                            height: '100%',
                            width: '230px',
                            left: '0px',
                            top: '63px',}}>
                <Toolbar>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
