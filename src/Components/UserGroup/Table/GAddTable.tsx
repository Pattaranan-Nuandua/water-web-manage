import * as React from 'react';
import './UserGroupTable.css'
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
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { TablePagination } from '@mui/material';
import { produce } from "immer";
import Stack from '@mui/material/Stack';
import { Formik, Form } from 'formik';
import { generate } from "shortid";
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const names = [
    'เขต1',
    'เขต2',
    'เขต3',
    'เขต4',
    'เขต5',
];
function getStyles(name: string, districtName: string[], theme: Theme) {
    return {
        fontWeight:
            districtName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 490,
    height: 300,
    bgcolor: 'background.paper',
    borderRadius: "16px",
    boxShadow: 24,
    p: 4,
};
const style2 = {
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
        fontFamily: 'Kanit',


    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        fontFamily: 'Kanit',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.common.white,
        fontFamily: 'Kanit',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
        fontFamily: 'Kanit',
    },
}));
/////////////////////////////////////////////////////
interface Values {
    id: string;
    group: string,
    details: string,

}
interface Props {
    onSubmit: (values: Values) => void;
}
/*
    id: string,
    username: string,
    firstname: string,
    lastname: string,
    usertype: string,
    usergroup: string,
    resetpassword: string,
*/
/////////////////////////////////////////////////////



export const UserGroupTable: React.FC<Props> = ({ onSubmit }) => {

    //////////////////add user//////////////////////
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    /////////////modal  pass////////////////////////////
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //////////////////////////page/////////////////////////
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    /*const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - contacts.length) : 0;*/
    /////////////////////////////////////////////////////////////////input/////

    const [people, setPeople] = React.useState<Values[]>([
        { id: "", group: "", details: "" }

    ]);
/////////////////////////////////เขต////
const theme = useTheme();
    const [districtName, setdistrictName] = React.useState<string[]>([]);
    const handleChange = (event: SelectChangeEvent<typeof districtName>) => {
        const {
            target: { value },
        } = event;
        setdistrictName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <Paper>
            <TableContainer sx={{ minWidth: 1216 }}>

                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ชื่อกลุ่มผู้ใช้</StyledTableCell>
                            <StyledTableCell align="left">รายละเอียด</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {people
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((p) => (
                                /*.map((row, index) => (*/
                                <StyledTableRow key={p.group} >
                                    <StyledTableCell component="th" scope="row">{p.group}</StyledTableCell>
                                    <StyledTableCell align="left">{p.details}</StyledTableCell>
                                </StyledTableRow>
                                /*))}*/
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={people.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <div>
                {people.map((p, index) => {
                    return (
                        <Formik
                            key={p.id}
                            initialValues={{
                                id: generate(),
                                group: "",
                                details: "",
                            }}
                            onSubmit={values => {
                                onSubmit(values);
                            }}>
                            {({ values }) => (
                                <Form>
                                    <Modal
                                        open={open1}
                                        onClose={handleClose1}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style2}>
                                            <Box
                                                component="form"
                                                sx={{
                                                    "& > :not(style)": { width: "35ch", m: 1, align: "center", fontFamily: "kanit" },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <p className='text-header'>เพิ่มกลุ่มผู้ใช้</p>

                                                <h3 style={{ fontSize: '13px', position: 'absolute', left: '58px', top: '70px' }}>ชื่อกลุ่มผู้ใช้</h3>
                                                <TextField
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                    name="username"
                                                    //value={values.username}
                                                    onChange={e => {
                                                        const username = e.target.value;
                                                        setPeople(currentPeople =>
                                                            produce(currentPeople, v => {
                                                                v[index].group = username;
                                                            })
                                                        );
                                                    }}
                                                    style={{
                                                        position: 'absolute',
                                                        width: '420px',
                                                        height: '64px',
                                                        left: '58px',
                                                        top: '80px',
                                                    }}
                                                />
                                                <h3 style={{ fontSize: '13px', position: 'absolute', left: '58px', top: '170px' }}>ชื่อ</h3>
                                                <TextField
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                    name="details"
                                                    //value={values.firstname}
                                                    onChange={e => {
                                                        const details = e.target.value;
                                                        setPeople(currentPeople =>
                                                            produce(currentPeople, value => {
                                                                value[index].details = details;
                                                            })
                                                        );
                                                    }}
                                                    style={{
                                                        position: 'absolute',
                                                        width: '420px',
                                                        height: '64px',
                                                        left: '58px',
                                                        top: '160px',
                                                    }}
                                                />
                                                <TextField id="outlined-basic" label="สาขา" variant="outlined"
                                                    style={{
                                                        position: 'absolute',
                                                        width: '420px',
                                                        height: '64px',
                                                        left: '58px',
                                                        top: '330px',
                                                    }} />
                                                <div>
                                                    <FormControl
                                                        style={{
                                                            position: 'absolute',
                                                            width: '420px',
                                                            height: '64px',
                                                            left: '66px',
                                                            top: '410px',
                                                        }} >
                                                        <InputLabel id="demo-multiple-name-label">เขต</InputLabel>
                                                        <Select
                                                            labelId="demo-multiple-name-label"
                                                            id="demo-multiple-name"
                                                            multiple
                                                            value={districtName}
                                                            onChange={handleChange}
                                                            input={<OutlinedInput label="Name" />}
                                                            MenuProps={MenuProps}
                                                        >
                                                            {names.map((name) => (
                                                                <MenuItem
                                                                    key={name}
                                                                    value={name}
                                                                    style={getStyles(name, districtName, theme)}
                                                                >
                                                                    {name}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                                <div >
                                                    <Stack direction="row" spacing={2} >
                                                        <Button className="add-user"
                                                            variant="contained"
                                                            type="submit"
                                                            style={{ background: "#0C3483", marginLeft: "auto", marginRight: 260, }}
                                                            onClick={() => {
                                                                setPeople(currentPeople => [
                                                                    ...currentPeople,
                                                                    {
                                                                        id: generate(),
                                                                        group: "",
                                                                        details: "",

                                                                    }
                                                                ]);
                                                            }}
                                                        >ยืนยัน
                                                        </Button>
                                                        <Button className="btn-cancle"
                                                            variant="contained"
                                                            style={{ background: "#DF0000", marginLeft: 20, marginRight: "auto" }}
                                                            onClick={() => {
                                                                alert('ยกเลิก');
                                                            }}
                                                        >ยกเลิก</Button>
                                                    </Stack>
                                                </div>
                                            </Box>
                                        </Box>
                                    </Modal>
                                </Form>
                            )}
                        </Formik>
                    )
                })}
            </div>
            <Button
                sx={{ fontFamily: "Kanit" }}
                type="submit"
                className="btn-add"
                variant="contained"
                style=
                {{
                    borderRadius: 8,
                    backgroundColor: "#0C3483",
                    marginTop: "-145px",
                    marginLeft: "290px",
                    position: "absolute"
                }}
                onClick={handleOpen1}
            >
                เพิ่มผู้ใช้
            </Button>
        </Paper >
    );

}
