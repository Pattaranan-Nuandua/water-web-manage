import React from "react";
import './btn.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

function SBtnDelete(){
    const navigate = useNavigate();
    const deleteuser = () => {
        navigate("/deleteuser");
    };
    return(
        <Stack>
            <Button type="submit" 
                    className="btn-delete"
                    variant="contained"
                    onClick={deleteuser}
                    sx={{ fontFamily: "Kanit" }}
                    style={{
                        borderRadius: 8,
                        backgroundColor: "#DF0000",
                        marginTop: -50,
                        marginLeft: "150px"
                        
                    }}
                    >ลบผู้ใช้
            </Button>
        </Stack>
    );
}

export default SBtnDelete;