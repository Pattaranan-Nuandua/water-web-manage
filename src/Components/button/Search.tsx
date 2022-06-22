import React, { FormEvent, useEffect, useState } from "react";
import "./btn.css";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import CloseIcon from "@mui/icons-material/Close";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "../User/User.css";
import mockdata from "../User/Table/mock-data.json";
import { AddProps } from "../User/Table/interface2";

let result: any;

function userTarget(un: string) {
    result = mockdata.find(({ username }) => username === un);
    console.log(result);
}

const style = {
    width: "316px",
    height: "47px",
    borderRadius: "8px",
    position: "absolute" as "absolute",
    marginLeft: "125px",
    bottom: "0px",
    border: "1px solid rgba(8, 11, 15, 0.3)",
};

function Search() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.currentTarget.elements);
        console.log(event.currentTarget.elements[0]);
    };
    return (
        <Paper style={style}>
            <IconButton type="submit" aria-label="search" className="search-btn">
                <SearchIcon className="search-icon" />
            </IconButton>
            <InputBase
                className="in-find-text"
                placeholder="ค้นหาโดยusername"
                sx={{ fontFamily: "Kanit" }}
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
            />
            {searchTerm.length != 0 && (
                <div className="dataResult">
                    {mockdata
                        .filter((val) => {
                            if (searchTerm == "") {
                                return val;
                            } else if (
                                val.username.toLowerCase().includes(searchTerm.toLowerCase())
                            ) {
                                return val;
                            }
                        })
                        .map((val, key) => {
                            return (
                                <div key={key} onClick={() => userTarget(val.username)}>
                                    <p>{val.username}</p>
                                </div>
                            );
                        })}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <Button
                    type="submit"
                    className="btn-find"
                    variant="contained"
                    style={{
                        borderRadius: 8,
                        backgroundColor: "#0b4693",
                        marginLeft: 220,
                        position: "absolute",
                        fontFamily: "Kanit"
                    }}
                //onClick= {handleClick}
                >ค้นหา</Button>
            </form>
        </Paper>
    );
}

export default Search;
export { result };

/*
    <Paper style={style}>
        <IconButton type="submit" aria-label="search" className="search-btn">
        <SearchIcon className="search-icon" />
        </IconButton>
        <InputBase
        className="in-find-text"
        placeholder="ค้นหา"
        sx={{ fontFamily: "Kanit" }}
        />
    </Paper>
*/
