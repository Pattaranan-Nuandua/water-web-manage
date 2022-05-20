import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import styled from 'styled-components'


const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 90px;
    padding: 1rem 0 1.25rem;
`
const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        background-color: #ffffff;
        color: #000080;
        width: 100%;
        height: 55px;
        text-align: center;
    }
`
export default function Menu() {
    return (
        <Box>
            <AppBar style={{
                background: '#2B4586',
                display: 'fixed',
                position: 'absolute',
                height: '100%',
                width: '245px',
                left: '0px',
                top: '63px',
            }}>
                {SidebarData.map((item, index) => {
                    return (
                        <MenuItems key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                                <span style={{ marginLeft: '16px' }}>{item.title}</span>
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}
            </AppBar>
        </Box>
    );
}

