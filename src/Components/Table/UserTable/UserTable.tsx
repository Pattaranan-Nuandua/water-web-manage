import * as React from 'react';
import './UserTable.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import BtnResetPassword from "../../button/resetpass-button";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { TablePagination } from '@mui/material';



const style = {
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
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
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
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
function createData(Username: any, name: string, lastname: string, Usertype: string, UserGroup: string, ResetPassword: string) {
    return { Username, name, lastname, Usertype, UserGroup, ResetPassword };
}

const rows = [
    createData('Username01', 'name01', 'lastname01', 'ประเภทผู้ใช้01', ' กลุ่มผู้ใช้01', 'pass01'),
    createData('Username02', 'name02', 'lastname02', 'ประเภทผู้ใช้02', ' กลุ่มผู้ใช้02', 'pass02'),
    createData('Username03', 'name03', 'lastname03', 'ประเภทผู้ใช้03', ' กลุ่มผู้ใช้03', 'pass03'),
    createData('Username04', 'name04', 'lastname04', 'ประเภทผู้ใช้04', ' กลุ่มผู้ใช้04', 'pass04'),
    createData('Username05', 'name05', 'lastname05', 'ประเภทผู้ใช้05', ' กลุ่มผู้ใช้05', 'pass05'),
    createData('Username06', 'name06', 'lastname06', 'ประเภทผู้ใช้06', ' กลุ่มผู้ใช้06', 'pass06'),
    createData('Username07', 'name07', 'lastname07', 'ประเภทผู้ใช้07', ' กลุ่มผู้ใช้07', 'pass07'),
    createData('Username08', 'name08', 'lastname08', 'ประเภทผู้ใช้08', ' กลุ่มผู้ใช้08', 'pass08'),
];
export default function UserTable() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const [page, setPage] = React.useState(0);
    return (
        <Paper>
            <TableContainer sx={{ minWidth: 1216}}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Username</StyledTableCell>
                            <StyledTableCell align="left">ชื่อ</StyledTableCell>
                            <StyledTableCell align="left">นามสกุล</StyledTableCell>
                            <StyledTableCell align="left">ประเภทผู้ใช้</StyledTableCell>
                            <StyledTableCell align="left">กลุ่มผู้ใช้</StyledTableCell>
                            <StyledTableCell align="left">ResetPassword</StyledTableCell>

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
                                <StyledTableCell align="left">{row.ResetPassword}

                                    <Button onClick={handleOpen} className='resetpass'><ModeEditIcon /></Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
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
                                                <BtnResetPassword />
                                            </Box>
                                        </Box>
                                    </Modal>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}