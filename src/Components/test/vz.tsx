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
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { TablePagination } from '@mui/material';
import { produce } from "immer";
import Stack from '@mui/material/Stack';
import { Formik, Form } from 'formik';
import { generate } from "shortid";
import './btn.css'

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
    username: string,
    firstname: string,
    lastname: string,
    usertype: string,
    usergroup: string,
    resetpassword: string,
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



export const MyForm: React.FC<Props> = ({ onSubmit }) => {

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
        { id: "1", username: "username", firstname: "firstname", lastname: "lastname", usertype: "usertype", usergroup: "usergroup", resetpassword: "123" }
    ]);

    return (
        <Paper>
            <TableContainer sx={{ minWidth: 1216 }}>

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

                        {people
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((p) => (
                                /*.map((row, index) => (*/
                                <StyledTableRow key={p.username} >
                                    <StyledTableCell component="th" scope="row">{p.username}</StyledTableCell>
                                    <StyledTableCell align="left">{p.firstname}</StyledTableCell>
                                    <StyledTableCell align="left">{p.lastname}</StyledTableCell>
                                    <StyledTableCell align="left">{p.usertype}</StyledTableCell>
                                    <StyledTableCell align="left">{p.usergroup}</StyledTableCell>
                                    <StyledTableCell align="left">{p.resetpassword}
                                        <Button onClick={handleOpen} className='resetpass'>
                                            <ModeEditIcon
                                                color="action"
                                                fontSize="small"
                                                sx={{ fontSize: 24 }} />
                                        </Button>
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
                                                    <h2 id="modal-modal-title" style={{ fontSize: '22px', position: 'absolute', left: '190px', }}>
                                                        Reset Password
                                                    </h2>
                                                    <h3 style={{ fontSize: '13px', position: 'absolute', left: '60px', top: '85px' }}>New password</h3>
                                                    <TextField id="outlined-basic" variant="outlined"
                                                        style={{
                                                            position: 'absolute',
                                                            width: '420px',
                                                            height: '64px',
                                                            left: '60px',
                                                            top: '110px',
                                                        }}

                                                    />
                                                    <h3 style={{ fontSize: '13px', position: 'absolute', left: '60px', top: '175px' }}>Confirm new password</h3>
                                                    <TextField id="outlined-basic" variant="outlined"
                                                        style={{
                                                            position: 'absolute',
                                                            width: '420px',
                                                            height: '64px',
                                                            left: '60px',
                                                            top: '200px',
                                                        }} />
                                                    <div >
                                                        <Stack direction="row" spacing={2} >
                                                            <Button
                                                                className='btn-resetpass'
                                                                variant="contained"
                                                                style={{ background: "#0C3483", marginLeft: "auto", marginRight: 40 }}

                                                            >ยืนยัน
                                                            </Button>
                                                            <Button
                                                                className='btn-resetpass'
                                                                variant="contained"
                                                                style={{ background: "#DF0000", marginLeft: 30, marginRight: "auto" }}
                                                            >ยกเลิก</Button>
                                                        </Stack>
                                                    </div>
                                                </Box>
                                            </Box>
                                        </Modal>
                                    </StyledTableCell>
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
                <Button
                    sx={{ fontFamily: "Kanit" }}
                    type="submit"
                    className="btn-add"
                    variant="contained"
                    style=
                    {{
                        borderRadius: 8,
                        backgroundColor: "#0b4693",
                        marginTop: -47
                    }}
                    onClick={handleOpen1}
                >
                    เพิ่มผู้ใช้
                </Button>
                {people.map((p, index) => {
                    return (
                        <Formik
                            key={p.id}
                            initialValues={{
                                id: generate(),
                                username: "",
                                firstname: "",
                                lastname: "",
                                usertype: "",
                                usergroup: "",
                                resetpassword: ""
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
                                                <p className='text-header'>เพิ่มผู้ใช้</p>

                                                <h3 style={{ fontSize: '13px', position: 'absolute', left: '58px', top: '70px' }}>Username</h3>
                                                <TextField
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                    name="username"
                                                    //value={values.username}
                                                    onChange={e => {
                                                        const username = e.target.value;
                                                        setPeople(currentPeople =>
                                                            produce(currentPeople, v => {
                                                                v[index].username = username;
                                                            })
                                                        );
                                                    }}
                                                    style={{
                                                        position: 'absolute',
                                                        width: '420px',
                                                        height: '64px',
                                                        left: '58px',
                                                        top: '100px',
                                                    }}
                                                />
                                                <h3 style={{ fontSize: '13px', position: 'absolute', left: '58px', top: '170px' }}>ชื่อ</h3>
                                                <TextField
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                    name="firstname"
                                                    //value={values.firstname}
                                                    onChange={e => {
                                                        const firstname = e.target.value;
                                                        setPeople(currentPeople =>
                                                            produce(currentPeople, value => {
                                                                value[index].firstname = firstname;
                                                            })
                                                        );
                                                    }}

                                                    style={{
                                                        position: 'absolute',
                                                        width: '205px',
                                                        height: '64px',
                                                        left: '58px',
                                                        top: '200px',
                                                    }}
                                                />
                                                <h3 style={{ fontSize: '13px', position: 'absolute', left: '273px', top: '170px' }}>นามสกุล</h3>
                                                <TextField
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                    name="lastname"
                                                    //value={values.lastname}
                                                    onChange={e => {
                                                        const lastname = e.target.value;
                                                        setPeople(currentPeople =>
                                                            produce(currentPeople, v => {
                                                                v[index].lastname = lastname;
                                                            })
                                                        );
                                                    }}
                                                    style={{
                                                        position: 'absolute',
                                                        width: '205px',
                                                        height: '64px',
                                                        left: '273px',
                                                        top: '200px',
                                                    }}
                                                />
                                                <h3 style={{ fontSize: '13px', position: 'absolute', left: '58px', top: '270px' }}>ประเภทผู้ใช้</h3>
                                                <TextField
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                    name="usertype"
                                                    //value={values.usertype}
                                                    onChange={e => {
                                                        const usertype = e.target.value;
                                                        setPeople(currentPeople =>
                                                            produce(currentPeople, v => {
                                                                v[index].usertype = usertype;
                                                            })
                                                        );
                                                    }}
                                                    style={{
                                                        position: 'absolute',
                                                        width: '420px',
                                                        height: '64px',
                                                        left: '58px',
                                                        top: '300px',
                                                    }}
                                                />
                                                <h3 style={{ fontSize: '13px', position: 'absolute', left: '58px', top: '370px' }}>กลุ่มผู้ใช้</h3>
                                                <TextField
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                    name="usergroup"
                                                    //value={values.usergroup}
                                                    onChange={e => {
                                                        const usergroup = e.target.value;
                                                        setPeople(currentPeople =>
                                                            produce(currentPeople, v => {
                                                                v[index].usergroup = usergroup;
                                                            })
                                                        );
                                                    }}
                                                    style={{
                                                        position: 'absolute',
                                                        width: '420px',
                                                        height: '64px',
                                                        left: '58px',
                                                        top: '400px',
                                                    }}
                                                />

                                                <h3 style={{ fontSize: '13px', position: 'absolute', left: '58px', top: '470px' }}>Password</h3>
                                                <TextField
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                    name="resetpassword"
                                                    //value={values.resetpassword}
                                                    onChange={e => {
                                                        const resetpassword = e.target.value;
                                                        setPeople(currentPeople =>
                                                            produce(currentPeople, v => {
                                                                v[index].resetpassword = resetpassword;
                                                            })
                                                        );
                                                    }}
                                                    style={{
                                                        position: 'absolute',
                                                        width: '420px',
                                                        height: '64px',
                                                        left: '58px',
                                                        top: '500px',
                                                    }}
                                                />
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
                                                                        username: "",
                                                                        firstname: "",
                                                                        lastname: "",
                                                                        usertype: "",
                                                                        usergroup: "",
                                                                        resetpassword: "",
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

        </Paper >
    );
}
