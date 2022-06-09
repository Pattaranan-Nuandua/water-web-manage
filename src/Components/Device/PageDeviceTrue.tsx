import { Button, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import React, { ReactNode, useEffect, useState } from 'react';

import './css/Device.css';
/*import AddButton from '../Component/AddButton';*/
//import SearchButton from '../Component/SearchButton';
//import TableDevice from './TableDevice';
//import EditButton from '../Component/EditButton';
//import LinkpageDelete from '../Content/linkpageDelete';
import BasicPopover from './Popup';
import DeletePopover from './Popup-Delete';
import { Route } from 'react-router-dom';
import PageDelete from './PageDeleteTrue';
//import Sidebar from '../Component/sidebar';
import axios from 'axios';
//import Left from '../Component/left';
//import  SidebarData  from '../Component/SidebarData';
//import TabMenu from '../Component/Menu-sidebar';
import DeleteButton from './DeleteButton';
import Header from '../Navbar/Header';
import Menu from '../Navbar/Menu-sidebar';
import TableDevice from './TableDevice';

type Device = {
    id: string;
    name: string;
    type: string;
    p1: number;
    p2: number;
    flow: number;
    totalizer: string;
    time: ReactNode;
}

function PageDevice() {

    const [rows, setRows] = useState<Device[]>([])
    const [search, setSearch] = React.useState('');


    useEffect(() => {
        axios.get('http://localhost:5000/device/search')
            .then((response) => setRows(response.data))
    }, [])

    const handleSubmit = () => {
        axios.get('http://localhost:5000/search', { params: { search: search } })
            .then((response) => setRows(response.data))

    }

    return (

        <div>
            <Menu />
            <Header />
            <div className="container" style={{ marginLeft: '230px', width: '85%' }}>
                <div className="textName">Device</div>
                <Paper className="paper-search" sx={{ borderRadius: "8px", width: "350px" }}>
                    <IconButton className="search-icon"
                        type="submit"
                        sx={{ Left: "100px" }}
                        aria-label="search"
                    >
                        <SearchIcon
                            className="search-icon"
                            sx={{ color: "rgba(8, 11, 15, 0.3)" }}
                        />
                    </IconButton>
                    <InputBase
                        name="ID" type="text" id='id'
                        className="search-text"
                        placeholder="ค้นหา"
                        sx={{ fontFamily: "Kanit" }}
                        onChange={(e) => setSearch(e.target.value)} value={search}
                    />
                </Paper>
                <Button
                    onClick={handleSubmit}
                    className="find-Button"
                    variant="contained"
                    style={{ backgroundColor: "#3553A4", borderRadius: '8px', color: "#fff", fontFamily: 'Kanit', marginLeft: '470px', marginRight: 'auto', marginTop: '30px' }}
                >
                    ค้นหา
                </Button>
                <BasicPopover />
                <DeleteButton />
                <TableDevice rows={rows} />

                {/* <EditButton /> */}
            </div>
        </div>
    );
}
export default PageDevice;