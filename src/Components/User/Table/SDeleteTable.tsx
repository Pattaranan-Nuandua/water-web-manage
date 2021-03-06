import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        background: 'rgba(53, 83, 164, 0.1)',
        color: theme.palette.common.black,
        fontFamily: 'Kanit',

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        fontFamily: 'Kanit',
    },
}));

interface Data {
    Username: string;
    Name: string;
    Lastname: string;
    Usertype: string;
    Usergroup: string;
    ResetPassword: string;
}

function createData(
    Username: string,
    Name: string,
    Lastname: string,
    Usertype: string,
    Usergroup: string,
    ResetPassword: string,
): Data {
    return {
        Username,
        Name,
        Lastname,
        Usertype,
        Usergroup,
        ResetPassword,
    };
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
interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}
const headCells: readonly HeadCell[] = [
    {
        id: 'Username',
        numeric: false,
        disablePadding: true,
        label: 'Username',
    },
    {
        id: 'Name',
        numeric: true,
        disablePadding: false,
        label: 'ชื่อ',
    },
    {
        id: 'Lastname',
        numeric: true,
        disablePadding: false,
        label: 'นามสกุล',
    },
    {
        id: 'Usertype',
        numeric: true,
        disablePadding: false,
        label: 'ประเภทผู้ใช้',
    },
    {
        id: 'Usergroup',
        numeric: true,
        disablePadding: false,
        label: 'กลุ่มผู้ใช้',
    },
    {
        id: 'ResetPassword',
        numeric: true,
        disablePadding: false,
        label: 'Password',
    },
];
interface EnhancedTableToolbarProps {
    numSelected: number;
}
const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                    fontFamily={'kanit'}
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="subtitle1"
                    id="tableTitle"
                    component="div"
                    fontFamily={'kanit'}
                >ลบผู้ใช้
                </Typography>
            )}
            {(
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};
interface EnhancedTableProps {
    numSelected: number;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    rowCount: number;
}
function EnhancedTableHead(props: EnhancedTableProps) {
    const EnhancedTableHead = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.common.white,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    const { onSelectAllClick, numSelected, rowCount } =
        props;
    return (
        <TableHead>
            <TableRow>
                <StyledTableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </StyledTableCell>
                {headCells.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'left' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                    >
                        {headCell.label}
                    </StyledTableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
export default function DeleteTable() {
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.Username);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{ minWidth: 1216 }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            onSelectAllClick={handleSelectAllClick}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.Username);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.Username)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.Username}
                                            selected={isItemSelected}
                                        >
                                            <StyledTableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </StyledTableCell>
                                            <StyledTableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.Username}
                                            </StyledTableCell>
                                            <StyledTableCell align="left">{row.Name}</StyledTableCell>
                                            <StyledTableCell align="left">{row.Lastname}</StyledTableCell>
                                            <StyledTableCell align="left">{row.Usertype}</StyledTableCell>
                                            <StyledTableCell align="left">{row.Usergroup}</StyledTableCell>
                                            <StyledTableCell align="left">{row.ResetPassword}</StyledTableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <StyledTableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

        </Box>
    );
}