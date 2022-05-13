import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function BasicTextFields() {
    return (
        <div className="App">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 5, minwidth: '300px' },
                }}
                noValidate
                autoComplete="off">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>
        </div>
    );
}

export default BasicTextFields;
