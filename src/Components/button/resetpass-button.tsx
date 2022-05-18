import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './button-from.css';

function BtnResetPassword() {
    return (
        <div >
            <Stack direction="row" spacing={2} >
                <Button 
                    className='btn-resetpass'
                    variant="contained"
                    style={{ background: "#0C3483", marginLeft: "auto", marginRight: 40  }}
                    onClick={() => {
                        alert('เปลี่ยน password เสร็จแล้ว');
                    }}

                >ยืนยัน
                </Button>
                <Button 
                    className='btn-resetpass'
                    variant="contained"
                    style={{ background: "#DF0000", marginLeft: 30, marginRight: "auto" }}
                    onClick={() => {
                        alert('ยกเลิก');
                    }}

                >ยกเลิก</Button>
            </Stack>
        </div>
    );
}
export default BtnResetPassword;
