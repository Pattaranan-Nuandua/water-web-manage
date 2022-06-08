import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import { ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import Timer from './dateTH';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: 'rgba(53, 83, 164, 0.1)',
    color: '#000',
    fontFamily: 'Kanit',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: 'Kanit',
  },
}));

const StyledTableRow = styled(TableRow)(({  }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#fff',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: '1px',
  },
}));

interface Data {
  id: string,
  name: string,
  type: string,
  p1: string,
  p2: string,
  flow: string,
  totalizer: string,
  time: string
}


// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: 'ID',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'ชื่ออุปกรณ์',
  },
  {
    id: 'type',
    numeric: false,
    disablePadding: false,
    label: 'ชนิดอุปกรณ์',
  },
  {
    id: 'p1',
    numeric: false,
    disablePadding: false,
    label: 'P1',
  },
  {
    id: 'p2',
    numeric: false,
    disablePadding: false,
    label: 'P2',
  },
  {
    id: 'flow',
    numeric: false,
    disablePadding: false,
    label: 'Flow',
  },
  {
    id: 'totalizer',
    numeric: false,
    disablePadding: false,
    label: 'Totalizer',
  },
  {
    id: 'time',
    numeric: false,
    disablePadding: false,
    label: 'Update',
  },
];



function EnhancedTableHead() {
  

  return (
    <TableHead>
      <TableRow>
        
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align='center'
          
          >
          {headCell.label}
              
            
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface Device {
  id: string;
  name: string;
  type: string;
  p1: number;
  p2: number;
  flow: number;
  totalizer: string;
  time: ReactNode;
}

interface DeviceProps {
  rows : Device[]
}



export default function TableDevice(props: DeviceProps) {

  const { rows } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const navigate = useNavigate()
  /* const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  }; */


  // Avoid a layout jump when reaching the last page with empty rows.
  
  return (
    <Box className='testTable' sx={{ width: '100%' }}>
      <Paper className='tabledevice' sx={{ width: '95%', mb: 1 ,margin:'25px' }}>
        
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            //size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
              {(rows)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: Device, index: number) => {
                  
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                    >
                      <StyledTableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="center"
                      >
                        
                        <Button
                          onClick={() => navigate('/detail')}
                        > {row.id} 
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell align="center" >{row.name}</StyledTableCell>
                      <StyledTableCell align="center">{row.type}</StyledTableCell>
                      <StyledTableCell align="center">{row.p1}</StyledTableCell>
                      <StyledTableCell align="center">{row.p2}</StyledTableCell>
                      <StyledTableCell align="center">{row.flow}</StyledTableCell>
                      <StyledTableCell align="center">{row.totalizer}</StyledTableCell>
                      <StyledTableCell align="center">{row.time}</StyledTableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    //height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
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
    </Box>
    
  );
}
