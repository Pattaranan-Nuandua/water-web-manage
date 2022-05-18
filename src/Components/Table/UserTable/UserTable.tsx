import React from "react";
import './UserTable.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import BtnResetPassword from "../../button/resetpass-button";


const style1 = {
    display: 'flex',
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "490px",
    height: "390px",
    bgcolor: "background.paper",
    borderRadius: "16px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        background: 'rgba(53, 83, 164, 0.1)',
        color: theme.palette.common.black,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.common.white,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(Username: any, name: string, lastname: string, Usertype: string, UserGroup: string, ResetPassword: any) {
    return { Username, name, lastname, Usertype, UserGroup, ResetPassword };
}

const rows = [
    createData('renebaebae', 'fsfs', 'xxxxx', 'ผู้ใช้xx', 'กลุ่มผู้ใช้xxx', 'pass123'),
    createData('hiiseulgi', 'fsfs', 'xxxxx', 'ผู้ใช้xx', 'กลุ่มผู้ใช้xxx', 'pass123'),
    createData('imyourjoy', 'fsfs', 'xxxxx', 'ผู้ใช้xx', 'กลุ่มผู้ใช้xxx', 'pass123'),
    createData('todayiswendy', 'fsfs', 'xxxxx', 'ผู้ใช้xx', 'กลุ่มผู้ใช้xxx', 'pass123'),
    createData('yerimise', 'fsfs', 'xxxxx', 'ผู้ใช้xx', 'กลุ่มผู้ใช้xxx', 'pass123'),
];
export default function UserTable() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1216 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Username</StyledTableCell>
                        <StyledTableCell align="left">ชื่อ</StyledTableCell>
                        <StyledTableCell align="left">นามสกุล</StyledTableCell>
                        <StyledTableCell align="left">ประเภทผู้ใช้</StyledTableCell>
                        <StyledTableCell align="left">กลุ่มผู้ใช้</StyledTableCell>
                        <StyledTableCell align="right">ResetPassword</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.Username} >
                            <StyledTableCell component="th" scope="row">{row.Username}</StyledTableCell>
                            <StyledTableCell align="left">{row.name}</StyledTableCell>
                            <StyledTableCell align="left">{row.lastname}</StyledTableCell>
                            <StyledTableCell align="left">{row.Usertype}</StyledTableCell>
                            <StyledTableCell align="left">{row.UserGroup}</StyledTableCell>
                            <StyledTableCell align="right">{row.ResetPassword}
                                <Button onClick={handleOpen}><EditIcon /></Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style1}>
                                        <Box component="form"
                                            sx={{
                                                "& > :not(style)": { width: "35ch", m: 1, align: "center", fontFamily: "kanit" },
                                            }}
                                            noValidate
                                            autoComplete="off">
                                            <Typography id="modal-modal-title" variant="h6" component="h2" className="header">
                                            Reset Password
                                        </Typography>
                                        <TextField id="outlined-basic" label="New password" variant="outlined"
                                            style={{
                                                position: 'absolute',
                                                width: '420px',
                                                height: '64px',
                                                left: '60px',
                                                top: '90px',
                                            }} />
                                        <TextField id="outlined-basic" label="Confirm new password" variant="outlined"
                                            style={{
                                                position: 'absolute',
                                                width: '420px',
                                                height: '64px',
                                                left: '60px',
                                                top: '180px',
                                            }} />
                                        <BtnResetPassword/>            
                                        </Box>
                                    </Box>
                                </Modal>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        
    );
}