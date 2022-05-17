import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';


const columns: GridColDef[] = [
    { field: 'username', headerName: 'Username', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {field: 'usertype',headerName: 'Usertype',type: 'string',width: 90},
    {field: 'usergroup',headerName: 'Usergroup',type: 'string',width: 90},
    {field: 'resetPassword',headerName: 'ResetPassword',type: 'string',width: 90},
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];


const rows = [
    {username: 'renebaebae', firstName: 'fsfs', lastName:'xxxxx',usertype: 'ผู้ใช้xx',usergroup: 'กลุ่มผู้ใช้xxx',resetPassword:'pass123'},
    {username: 'hiiseulgi', firstName: 'fsfs',lastName: 'xxxxx',usertype: 'ผู้ใช้xx',usergroup: 'กลุ่มผู้ใช้xxx',resetPassword:'pass123'},
    {username: 'imyourjoy',firstName: 'fsfs',lastName: 'xxxxx',usertype: 'ผู้ใช้xx',usergroup: 'กลุ่มผู้ใช้xxx',resetPassword:'pass123'},
    {username: 'todayiswendy',firstName: 'fsfs',lastName: 'xxxxx',usertype: 'ผู้ใช้xx',usergroup: 'กลุ่มผู้ใช้xxx',resetPassword:'pass123'},
    {username: 'yerimise',firstName: 'fsfs',lastName: 'xxxxx',usertype: 'ผู้ใช้xx',usergroup: 'กลุ่มผู้ใช้xxx',resetPassword:'pass123'},
    {username: 'renebaebae', firstName: 'fsfs', lastName:'xxxxx',usertype: 'ผู้ใช้xx',usergroup: 'กลุ่มผู้ใช้xxx',resetPassword:'pass123'},
    {username: 'renebaebae', firstName: 'fsfs', lastName:'xxxxx',usertype: 'ผู้ใช้xx',usergroup: 'กลุ่มผู้ใช้xxx',resetPassword:'pass123'},
    {username: 'renebaebae', firstName: 'fsfs', lastName:'xxxxx',usertype: 'ผู้ใช้xx',usergroup: 'กลุ่มผู้ใช้xxx',resetPassword:'pass123'},
    {username: 'renebaebae', firstName: 'fsfs', lastName:'xxxxx',usertype: 'ผู้ใช้xx',usergroup: 'กลุ่มผู้ใช้xxx',resetPassword:'pass123'},
    {username: 'renebaebae', firstName: 'fsfs', lastName:'xxxxx',usertype: 'ผู้ใช้xx',usergroup: 'กลุ่มผู้ใช้xxx',resetPassword:'pass123'},
    {username: 'renebaebae', firstName: 'fsfs', lastName:'xxxxx',usertype: 'ผู้ใช้xx',usergroup: 'กลุ่มผู้ใช้xxx',resetPassword:'pass123'},
    {username: 'renebaebae', firstName: 'fsfs', lastName:'xxxxx',usertype: 'ผู้ใช้xx',usergroup: 'กลุ่มผู้ใช้xxx',resetPassword:'pass123'},
    {username: 'renebaebae', firstName: 'fsfs', lastName:'xxxxx',usertype: 'ผู้ใช้xx',usergroup: 'กลุ่มผู้ใช้xxx',resetPassword:'pass123'},
    {username: 'renebaebae', firstName: 'fsfs', lastName:'xxxxx',usertype: 'ผู้ใช้xx',usergroup: 'กลุ่มผู้ใช้xxx',resetPassword:'pass123'},
    {username: 'renebaebae', firstName: 'fsfs', lastName:'xxxxx',usertype: 'ผู้ใช้xx',usergroup: 'กลุ่มผู้ใช้xxx',resetPassword:'pass123'},

];
export default function DeleteTable() {
        return (
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={6}
                    rowsPerPageOptions={[6]}
                    checkboxSelection
                />
            </div>
        );
}