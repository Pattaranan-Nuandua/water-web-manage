import React from "react";
import './btn.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function GBtnDelete(){
    return(
        <Stack>
            <Button type="submit" 
                    className="btn-delete"
                    variant="contained"
                    sx={{ fontFamily: "Kanit" }}
                    style={{
                        borderRadius: 8,
                        backgroundColor: "#DF0000",
                        marginTop: -48
                        
                    }}
                    >ลบกลุ่มผู้ใช้</Button>
        </Stack>
    );
}

export default GBtnDelete;