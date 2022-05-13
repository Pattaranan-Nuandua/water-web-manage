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

function createData(Username : any, name : string, lastname: string, Usertype: string, UserGroup: string,ResetPassword:any) {
    return { Username, name, lastname, Usertype, UserGroup,ResetPassword };
}

const rows = [
    createData('renebaebae', 'fsfs', 'xxxxx', 'ผู้ใช้xx', 'กลุ่มผู้ใช้xxx','pass123'),
    createData('hiiseulgi', 'fsfs', 'xxxxx', 'ผู้ใช้xx', 'กลุ่มผู้ใช้xxx','pass123'),
    createData('imyourjoy', 'fsfs', 'xxxxx', 'ผู้ใช้xx', 'กลุ่มผู้ใช้xxx','pass123'),
    createData('todayiswendy', 'fsfs', 'xxxxx', 'ผู้ใช้xx', 'กลุ่มผู้ใช้xxx','pass123'),
    createData('yerimise', 'fsfs', 'xxxxx', 'ผู้ใช้xx', 'กลุ่มผู้ใช้xxx','pass123'),
];
export default function UserTable() {
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
                            <StyledTableCell align="right">{row.ResetPassword}<EditIcon onClick={row.ResetPassword}/></StyledTableCell>
                            
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
/**<StyledTableCell 
                                align="left">
                                <EditIcon onClick={() => {(row.ResetPassword);}}/>
                            </StyledTableCell> */