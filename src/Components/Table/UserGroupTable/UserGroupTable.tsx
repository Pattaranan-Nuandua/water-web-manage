import './UserGroupTable.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';


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

function createData(Group: string, Details: any,) {
    return { Group, Details, };
}

const rows = [
    createData('กลุ่มผู้ใช้1', 'รายละเอียด '),
    createData('กลุ่มผู้ใช้2', 'รายละเอียด '),
    createData('กลุ่มผู้ใช้3', 'รายละเอียด ',),
    createData('กลุ่มผู้ใช้4', 'รายละเอียด ',),
    createData('กลุ่มผู้ใช้5', 'รายละเอียด ',),
    createData('กลุ่มผู้ใช้6', 'รายละเอียด ',),
    createData('กลุ่มผู้ใช้7', 'รายละเอียด ',),
];
export default function UserGroupTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <Paper >
            <TableContainer sx={{ minWidth: 1216 }}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ชื่อกลุ่มผู้ใช้</StyledTableCell>
                            <StyledTableCell align="left">รายละเอียด</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <StyledTableRow key={row.Group} >
                                    <StyledTableCell component="th" scope="row">{row.Group}</StyledTableCell>
                                    <StyledTableCell align="left" >{row.Details}</StyledTableCell>
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
