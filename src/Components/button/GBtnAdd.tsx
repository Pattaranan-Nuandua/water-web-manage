import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './btn.css'
import './AddUser.css'
import BtnGroup from './button-g';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "550px",
    height: "630px",
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

const names = [
    'เขต1',
    'เขต2',
    'เขต3',
    'เขต4',
    'เขต5',
];

function getStyles(name: string, personName: string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function GBtnAdd() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    ///////////////////////////////////////////////////////////////////////////////////////////////
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);
    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////
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
                เพิ่มกลุ่มผู้ใช้
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
                            "& > :not(style)": { width: "35ch", m: 1, align: "center", fontFamily: "kanit" },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <p className='text-header'>เพิ่มกลุ่มผู้ใช้</p>
                        <TextField id="outlined-basic" label="ชื่อกลุ่มผู้ใช้" variant="outlined"
                            style={{
                                position: 'absolute',
                                width: '550px',
                                height: '64px',
                                left: '25px',
                                top: '80px',
                            }} />

                        <TextField id="outlined-basic" label="รายละเอียด" variant="outlined"
                            style={{
                                position: 'absolute',
                                width: '550px',
                                height: '64px',
                                left: '25px',
                                top: '160px',
                            }} />

                        <TextField id="outlined-basic" label="สาขา" variant="outlined"
                            style={{
                                position: 'absolute',
                                width: '550px',
                                height: '64px',
                                left: '25px',
                                top: '320px',
                            }} />
                        <div>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-name-label">เขต</InputLabel>
                                <Select
                                    labelId="demo-multiple-name-label"
                                    id="demo-multiple-name"
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput label="Name" />}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(name, personName, theme)}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </Box>
                    <BtnGroup />
                </Box>
            </Modal>
        </Stack >
    );
}

