import React from "react";
import './btn.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

function GBtnDelete(){
    const navigate = useNavigate();
    const deleteusergroup = () => {
        navigate("/deleteusergroup");
    };
    return(
        <Stack>
            <Button type="submit" 
                    className="btn-delete"
                    variant="contained"
                    onClick={deleteusergroup}
                    sx={{ fontFamily: "Kanit" }}
                    style={{
                        borderRadius: 8,
                        backgroundColor: "#DF0000",
                        marginTop: -50,
                        marginLeft: "150px"
                        
                        
                    }}
                    >ลบกลุ่มผู้ใช้</Button>
        </Stack>
    );
}

export default GBtnDelete;