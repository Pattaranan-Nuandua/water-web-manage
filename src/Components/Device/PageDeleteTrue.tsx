import { Button, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import React, { ReactNode, useEffect, useState } from 'react';

import './css/Device.css';
//import AddButton from '../Component/AddButton';
import DeleteButton from './DeleteButton';
import SearchButton from '../button/SearchButton';
//import TableDevice from './TableDevice';
//import BasicPopover from './Popup';
//import TableDelete from './TableDelete';
import DeletePopover from './Popup-Delete';
//import Left from '../Component/left';
//import EnhancedTableHead from '../Content/testTable';
import TableDelete from './TableDeleteTrue';
import axios from 'axios';
//import TabMenu from '../Component/Menu-sidebar';
import Header from '../Navbar/Header';
import Menu from '../Navbar/Menu-sidebar';
import EditButton from './EditButton';

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

function PageDelete() {

    const [search, setSearch] = React.useState('');
    const [rows, setRows] = useState<Device[]>([])

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
            <div className="container" style={{ marginLeft: '230px' }}>
                <div className="textName">อุปกรณ์</div>
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

                <TableDelete rows={rows} />
                <EditButton />
            </div>

        </div>
    );
}
export default PageDelete;