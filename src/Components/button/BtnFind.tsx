import React from "react";
import './btn.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function BtnFind(){
    return(
        <Stack>
            <Button type="submit" 
                    className="btn-find"
                    variant="contained"
                    style={{
                        borderRadius: 8,
                        backgroundColor: "#0b4693",
                        marginLeft: 350,
                        fontFamily: "Kanit"
                    }}

                    onClick={() => {                    //
                        alert('ค้นหา');       //
                    }}     
                    >ค้นหา</Button>
        </Stack>
    );
}

export default BtnFind;