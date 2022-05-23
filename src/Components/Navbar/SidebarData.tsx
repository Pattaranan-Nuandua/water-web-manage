import React from 'react'
import MapIcon from '@mui/icons-material/Map';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { Settings } from '@mui/icons-material';

export const SidebarData = [
    {
        title: 'แผนที่',
        path: '/map',
        icon: <MapIcon/>
    },
    {
        title: 'อุปกรณ์',
        path: '/device',
        icon: <VideoLabelIcon/>
    },
    {
        title: 'จัดการผู้ใช้',
        path: '/user',
        icon: <PersonIcon/>
    },
    {
        title: 'จัดการกลุ่มผู้ใช้',
        path: '/usergroup',
        icon: <PeopleAltIcon/>
    },
    {
        title: 'ตั้งค่า',
        path: '/setting',
        icon: <Settings/>
    },
    {
        title: 'Log out',
        path: '/login',
        icon: <LogoutIcon/>
    },

]