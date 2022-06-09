import React, { ReactNode, useState, useEffect } from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import  TableHead  from '@mui/material/TableHead';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DeletePopover from './Popup-Delete';
import { Button, Modal } from 'react-bootstrap';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "450px",
  height: "200px",
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  
};

const StyledTableCell = styled(TableCell)(({  }) => ({
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

const StyledTableRow = styled(TableRow)(({ }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#fff',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: '1px',
  },
}));

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

interface Data {
  id: string,
  name: string,
  type: string,
  p1: string,
  p2: string,
  flow: string,
  totalizer: string,
  update: string
}

function createData(
  id: string,
  name: string,
  type: string,
  p1: number,
  p2: number,
  flow: number,
  totalizer: string,
  time: Date
) {
  return { id, name, type, p1, p2, flow, totalizer, time };
}



// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly


interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
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
    id: 'update',
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
        <StyledTableCell>
          <IconButton >  
            <DeleteIcon />
          </IconButton>
        </StyledTableCell>
        
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

interface DeleteProps {
  rows : Device[];
}

export default function TableDelete(props: DeleteProps) {

  const {rows } = props;
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  //const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const handleDelete = () => {
    axios.delete('http://localhost:5000/device/delete', {  })
      .then((response) => console.log(response.data))
    handleClose()
  }
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target
      .checked) {
      const newSelecteds = rows.map((n) => n.name);
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

  
  const [id,setId] = React.useState('');
  /* const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  }; */

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (

    <Box className='testTable' sx={{ width: '95%' }}>
      <Paper sx={{ width: '100%', mb: 2 ,margin:'25px'}}>
        
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            //size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
            />
            
            <TableBody>
            
            {(rows)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: Device, index: number) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
              
                
                  return (
                    <TableRow
                      hover
                      onClick={(event: React.MouseEvent<unknown, MouseEvent>) => handleClick(event, row.name)}
                    
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                    
                      <StyledTableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="center"
                      >
                        {row.id}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.name}</StyledTableCell>
                      <StyledTableCell align="center">{row.type}</StyledTableCell>
                      <StyledTableCell align="center">{row.p1}</StyledTableCell>
                      <StyledTableCell align="center">{row.p2}</StyledTableCell>
                      <StyledTableCell align="center">{row.flow}</StyledTableCell>
                      <StyledTableCell align="center">{row.totalizer}</StyledTableCell>
                      <StyledTableCell align="center">{row.time}</StyledTableCell>
                      <StyledTableCell >
                        <IconButton 
                          onClick={handleDelete}
                        >  
                          <DeleteIcon />
                        </IconButton>   
                      </StyledTableCell>
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
        <div>
        
        <TablePagination 
          
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          >
          
        </TablePagination>
        </div>
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
      
    </Box>
  );
}

