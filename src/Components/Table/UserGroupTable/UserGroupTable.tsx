import './UserGroupTable.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



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

function createData(Group : string, Details : any, Quantity : number) {
    return { Group, Details, Quantity };
}

const rows = [
    createData('renebaebae1', 'sfafafafafawfafafafafawfafafafafafawfafaefefeafawfafafafafafawfafafafafawfafafafafawfafafafafawfwa', 29),
    createData('hiiseulgi2', 'RV3', 10),
    createData('imyourjoy3', 'RV3', 5),
    createData('todayiswendy4', 'RV3', 21),
    createData('yerimise5', 'RV3', 9),
];
export default function UserGroupTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1216 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ชื่อกลุ่มผู้ใช้</StyledTableCell>
                        <StyledTableCell align="left" >รายละเอียด</StyledTableCell>
                        <StyledTableCell align="right" >จำนวน</StyledTableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.Group}>
                            <StyledTableCell component="th" scope="row">{row.Group}</StyledTableCell>
                            <StyledTableCell align="left" >{row.Details}</StyledTableCell>
                            <StyledTableCell align="right"  >{row.Quantity}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
