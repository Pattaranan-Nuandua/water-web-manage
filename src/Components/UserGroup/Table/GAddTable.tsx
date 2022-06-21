import React, {
    FC,
    ChangeEvent,
    MouseEvent,
    useState,
    Dispatch,
    SetStateAction,
} from "react";
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
import { GroupProps } from "../Table/interface3";
import Delete from "@mui/icons-material/Delete";

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
interface Props {
    addusergroup: GroupProps["addusergroup"];
    setAddUserGroup: Dispatch<SetStateAction<GroupProps["addusergroup"]>>;
}

const UserGroupTable: React.FC<Props> = ({ addusergroup, setAddUserGroup }) => {

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
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

    const [group, setGroup] = useState("");
    const setGroupinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setGroup(event.target.value);
    };
    const [details, setDetails] = useState("");
    const setDetailsinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setDetails(event.target.value);
    };
    const [company, setCompany] = useState("");
    const setCompanyinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCompany(event.target.value);
    };

    /////////////////////////////////เขต/////////////////////////////
    const theme = useTheme();
    const [districtName, setdistrictName] = React.useState<string[]>([]);
    const setdistrictNameinputHandler = (event: SelectChangeEvent<typeof districtName>) => {
        const {
            target: { value },
        } = event;
        setdistrictName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.currentTarget.elements);
        console.log(event.currentTarget.elements[0]);
    };

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (!group || !details || !company ) {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
            handleClose1()
            return;
        }
        handleClose1()
        const userData = { group, details, company };
        setAddUserGroup([...addusergroup, userData]);
        setGroup("");
        setDetails("");
        setCompany("");
    };
    console.log(group, details, company, districtName);

    const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
        const deleteusergroup = [...addusergroup];
        const index = addusergroup.findIndex((addusergroup) => addusergroup === addusergroup);       
        deleteusergroup.splice(index,1);
        setAddUserGroup(deleteusergroup);
    }
    return (
        <Paper>
            <TableContainer sx={{ minWidth: 1216 }}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ชื่อกลุ่มผู้ใช้</StyledTableCell>
                            <StyledTableCell align="center">รายละเอียด</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell> 
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {addusergroup
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((p) => (
                                /*.map((row, index) => (*/
                                <StyledTableRow key={p.group} >
                                    <StyledTableCell component="th" scope="row">{p.group}</StyledTableCell>
                                    <StyledTableCell align="center">{p.details}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Button onClick={handleDelete}>
                                            <Delete
                                                color="action"
                                                fontSize="medium"
                                                className='icon-edit' ////
                                            />
                                        </Button>
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
                count={addusergroup.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <form onSubmit={handleSubmit}>
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
                            <p style={{ fontSize: "large", marginLeft: "200px" }}>เพิ่มกลุ่มผู้ใช้</p>
                            <h3 style={{ fontSize: '13px', position: 'absolute', left: '58px', top: '70px' }}>ชื่อกลุ่มผู้ใช้</h3>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                name="group"
                                value={group}
                                onChange={setGroupinputHandler}
                                style={{
                                    position: 'absolute',
                                    width: '420px',
                                    height: '64px',
                                    left: '58px',
                                    top: '100px',
                                }}
                            />
                            <h3 style={{ fontSize: '13px', position: 'absolute', left: '58px', top: '170px' }}>รายละเอียด</h3>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                name="details"
                                value={details}
                                onChange={setDetailsinputHandler}
                                style={{
                                    position: 'absolute',
                                    width: '420px',
                                    height: '64px',
                                    left: '58px',
                                    top: '200px',
                                }}
                            />
                            <h3 style={{ fontSize: '13px', position: 'absolute', left: '58px', top: '290px' }}>พื้นที่</h3>
                            <TextField
                                id="outlined-basic"
                                label="สาขา"
                                variant="outlined"
                                name="company"
                                value={company}
                                onChange={setCompanyinputHandler}
                                style={{
                                    position: 'absolute',
                                    width: '420px',
                                    height: '64px',
                                    left: '58px',
                                    top: '320px',
                                }} />
                            <div>
                                <FormControl
                                    style={{
                                        position: 'absolute',
                                        width: '420px',
                                        height: '64px',
                                        left: '66px',
                                        top: '400px',
                                    }} >
                                    <InputLabel id="demo-multiple-name-label">เขต</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"

                                        value={districtName}
                                        onChange={setdistrictNameinputHandler}
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
                                        style={{ background: "#0b4693", marginLeft: "26px", marginTop: "520px" }}
                                        onClick={handleClick}
                                    >ยืนยัน
                                    </Button>
                                    <Button className="btn-cancle"
                                        variant="contained"
                                        onClick={handleClose1}
                                        style={{ background: "#DF0000", marginLeft: "290px", marginTop: "520px" }}
                                    >ยกเลิก</Button>
                                </Stack>
                            </div>
                        </Box>
                    </Box>
                </Modal>
            </form>
            <Button
                sx={{ fontFamily: "Kanit" }}
                type="submit"
                className="btn-add"
                variant="contained"
                style=
                {{
                    borderRadius: 8,
                    backgroundColor: "#0b4693",
                    marginTop: "-145px",
                    marginLeft: "485px",
                    position: "absolute"
                }}
                onClick={handleOpen1}
            >
                เพิ่มกลุ่มผู้ใช้
            </Button>
        </Paper >
    );

}
export default UserGroupTable;