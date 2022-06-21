import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createTheme, Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

/////////////////////////////////////////////////////เขต///////////////////////////////////////////////
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
const districtnames = [
    'เขต1',
    'เขต2',
    'เขต3',
    'เขต4',
    'เขต5',
];
function getStyles1(name1: string, districtName: string[], theme1: Theme) {
    return {
        fontWeight:
            districtName.indexOf(name1) === -1
                ? theme1.typography.fontWeightRegular
                : theme1.typography.fontWeightMedium,
    };
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////สาขา//////////////////////////////////////////////////////////////////////////////////////////////
const branchnames = [
    'สาขา1',
    'สาขา2',
    'สาขา3',
    'สาขา4',
    'สาขา5',
];
function getStyles2(name2: string, branchName: string[], theme2: Theme) {
    return {
        fontWeight:
            branchName.indexOf(name2) === -1
                ? theme2.typography.fontWeightRegular
                : theme2.typography.fontWeightMedium,
    };
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function Header() {
    const theme = useTheme();
    const [districtName, setdistrictName] = React.useState<string[]>([]);
    const handleChange1 = (event: SelectChangeEvent<typeof districtName>) => {
        const {
            target: { value },
        } = event;
        setdistrictName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const [branchName, setbranchName] = React.useState<string[]>([]);
    const handleChange2 = (event: SelectChangeEvent<typeof branchName>) => {
        const {
            target: { value },
        } = event;
        setbranchName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <Box>
            <AppBar style={{
                background: '#2B4586',
                display: 'flex',
                position: 'fixed',
                width: '100%',
                height: '64px',
                left: '0px',
                top: '0px',
            }}>
                <Toolbar>
                    <Typography
                        variant="inherit"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Water Management
                        ระบบจัดการน้ำอัจฉริยะ
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={329} color="warning">
                                <NotificationsIcon />
                            </Badge>
                            <div>
                                <FormControl
                                    style={{
                                        color: 'white',
                                        display: 'flex',
                                        position: 'absolute',
                                        borderRadius: '8px',
                                        width: '200px',
                                        minHeight: '50px',
                                        right: '90px',
                                        top: '5px',
                                    }}
                                    size="small"
                                    
                                >
                                    <Select
                                        displayEmpty
                                        value={districtName}
                                        onChange={handleChange1}
                                        input={<OutlinedInput />}
                                        
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <em>- เลือกเขต -</em>;
                                            }
                                            return selected.join(', ');
                                        }}

                                        MenuProps={MenuProps}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        {districtnames.map((name1) => (
                                            <MenuItem
                                                key={name1}
                                                value={name1}
                                                style={getStyles1(name1, districtName, theme)}
                                            >
                                                {name1}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    
                                </FormControl>
                            </div>
                            <div>
                                <FormControl
                                    style={{
                                        color: 'white',
                                        display: 'flex',
                                        position: 'absolute',
                                        borderRadius: '8px',
                                        width: '200px',
                                        minHeight: '50px',
                                        right: '300px',
                                        top: '5px',

                                    }}
                                    size="small">
                                    <Select
                                        color="info"

                                        displayEmpty
                                        value={branchName}
                                        onChange={handleChange2}
                                        input={<OutlinedInput />}
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <em >- เลือกสาขา -</em>;
                                            }

                                            return selected.join(', ');
                                        }}
                                        MenuProps={MenuProps}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >

                                        {branchnames.map((name2) => (
                                            <MenuItem
                                                key={name2}
                                                value={name2}
                                                style={getStyles2(name2, branchName, theme)}
                                            >
                                                {name2}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box >
    );
}
