import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './btn.css'
import './AddUser.css'
import BtnUser from './button-s';

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "490px",
    height: "620px",
    bgcolor: "background.paper",
    borderRadius: "16px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};


function SBtnAdd() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Stack>
            <Button 
                sx={{ fontFamily: "Kanit" }}
                onClick={handleOpen}
                type="submit"
                className="btn-add"
                variant="contained"
                style=
                {{
                    borderRadius: 8,
                    backgroundColor: "#0b4693",
                    marginTop: -47
                }}
            >
                เพิ่มผู้ใช้
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                        <Box
                            component="form"
                            sx={{
                            "& > :not(style)": { width: "35ch", m: 1, align: "center" , fontFamily: "kanit" },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <p className='text-header'>เพิ่มผู้ใช้</p>

                            <h3 className="type-divice" style={{ fontSize: '13px', position: 'absolute' , left: '58px', top: '70px'}}>Username</h3>
                            <TextField id="outlined-basic" variant="outlined" 
                            style={{
                            position: 'absolute',
                            width: '420px',
                            height: '64px',
                            left: '58px',
                            top: '100px',}} />
                            
                            <h3 className="type-divice" style={{ fontSize: '13px', position: 'absolute' , left: '58px', top: '170px'}}>ชื่อ</h3>
                            <TextField id="outlined-basic"  variant="outlined" style={{
                            position: 'absolute',
                            width: '205px',
                            height: '64px',
                            left: '58px',
                            top: '200px',}} />

                            <h3 className="type-divice" style={{ fontSize: '13px', position: 'absolute' , left: '273px', top: '170px'}}>นามสกุล</h3>
                            <TextField id="outlined-basic"  variant="outlined" style={{
                            position: 'absolute',
                            width: '205px',
                            height: '64px',
                            left: '273px',
                            top: '200px',}}  />

                            <h3 className="type-divice" style={{ fontSize: '13px', position: 'absolute' , left: '58px', top: '270px'}}>ประเภทผู้ใช้</h3>
                            <TextField id="outlined-basic"  variant="outlined" style={{
                            position: 'absolute',
                            width: '420px',
                            height: '64px',
                            left: '58px',
                            top: '300px',}} />
                            
                            <h3 className="type-divice" style={{ fontSize: '13px', position: 'absolute' , left: '58px', top: '370px'}}>กลุ่มผู้ใช้</h3>
                            <TextField id="outlined-basic"  variant="outlined" style={{
                            position: 'absolute',
                            width: '420px',
                            height: '64px',
                            left: '58px',
                            top: '400px',}} />

                            <h3 className="type-divice" style={{ fontSize: '13px', position: 'absolute' , left: '58px', top: '470px'}}>Password</h3>
                            <TextField id="outlined-basic"  variant="outlined" style={{
                            position: 'absolute',
                            width: '420px',
                            height: '64px',
                            left: '58px',
                            top: '500px',}} />
                        </Box>
                        <BtnUser/>
                </Box>
            </Modal>
        </Stack>
    );
}

export default SBtnAdd;
