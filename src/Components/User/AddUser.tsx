import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './AddUser.css'

const style = {
    ml : "50px"
}

export default function AddUser() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { width: '35ch', m: 1, align: 'center' }
            }}
            noValidate
            autoComplete="off"
        >
            <p>เพิ่มผู้ใช้</p>
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="ชื่อ" variant="outlined" className='name' />
            <TextField id="outlined-basic" label="นามสกุล" variant="outlined" className='lastname' />
            <TextField id="outlined-basic" label="ประเภทผู้ใช้" variant="outlined" className='type' />
            <TextField id="outlined-basic" label="กลุ่มผู้ใช้" variant="outlined" className='group' />
            <TextField id="outlined-basic" label="Password" variant="outlined" className='password' />
            
            
        </Box>


    );
}
