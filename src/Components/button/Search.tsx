import React from "react";
import './btn.css';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import BtnFind from "./BtnFind";
import '../User/User.css';

const style = {
    width: '316px',
    height: '47px',
    borderRadius: '8px',
    position: "absolute" as "absolute",
    marginLeft: '125px',
    bottom: '0px',
    border: '1px solid rgba(8, 11, 15, 0.3)',
}
function Search(){
    return(
        <Paper style={style}>
            <IconButton type="submit"  aria-label="search" className="search-btn">
                <SearchIcon className="search-icon"/>
            </IconButton>
            <InputBase
                className="in-find-text"
                placeholder="ค้นหา"
                sx={{ fontFamily: "Kanit" }}
            />
        </Paper>
    );
}

export default Search;