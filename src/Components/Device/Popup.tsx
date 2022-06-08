import * as React from 'react';
//import Popover from '@mui/material/Popover';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import ButtonFrom from '../Component/buttonFrom';
//import AddButton from '../Component/AddButton';
import { Box, Modal, Stack, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios'
import '../css/App.css';
import '../css/Button.css';



const style = {

  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "550px",
  height: "700px",
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  marginLeft: "auto", marginRight: "auto"
};


export default function BasicPopover() {
  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [type, setType] = React.useState('');
  const [p1, setP1] = React.useState('');
  const [p2, setP2] = React.useState('');
  const [flow, setFlow] = React.useState('');
  const [totalizer, setTotalizer] = React.useState('');
  const [time, setTime] = React.useState<Date | null>(new Date());
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    axios.post('http://localhost:5000/device/add', { id, name, type, p1, p2, flow, totalizer, time })
      .then((response) => console.log(response.data.message))
    handleClose()
  }


  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button
          onClick={handleOpen}
          className="add-button"
          variant="contained"
          style={{
            backgroundColor: "#3553A4",
            borderRadius: "8px",
            color: "#fff",
            fontFamily: "Kanit",
            marginLeft: 'auto', marginRight: '300px', marginTop: '-50px'
            
          }}
        >
          เพิ่มอุปกรณ์
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}
          >
            <div
              className="addtext"
              style={{ fontSize: "30px", textAlign: "center" }}
            >กรอกข้อมูลเพิ่มอุปกรณ์</div>
            
            <div className="text">ชื่ออุปกรณ์</div><TextField placeholder="Name-Device" onChange={(e) => setName(e.target.value)} value={name}
              sx={{ width: "75%", marginLeft: '65px' }}
            />

            <div className="text">ชนิดอุปกรณ์</div><TextField placeholder="Type-Device" onChange={(e) => setType(e.target.value)} value={type}
              sx={{ width: "75%", marginLeft: '65px' }}
            />
            <div className="text">P1</div><TextField placeholder="P1" onChange={(e) => setP1(e.target.value)} value={p1}
              sx={{
                '& > :not(style)': { m: 0, width: '20ch', marginLeft: '65px' }
              }} />
            <div className="p2-divice" style={{ fontFamily: 'Kanit', fontSize: '15px', position: 'absolute', left: '330px', top: '275px' }}>P2</div>
            <TextField placeholder="P2" onChange={(e) => setP2(e.target.value)} value={p2}
              sx={{
                '& > :not(style)': { width: '20ch', marginLeft: '53px' }
              }} />

            <div className="text">Flow</div><TextField id="outlined-basic" placeholder="Flow" variant="outlined"
              sx={{ width: "75%", marginLeft: '65px' }} onChange={(e) => setFlow(e.target.value)} value={flow}
            />
            <div className="text">Totalizer</div><TextField id="outlined-basic" placeholder="Totalizer" variant="outlined"
              sx={{ width: "75%", marginLeft: '65px' }} onChange={(e) => setTotalizer(e.target.value)} value={totalizer}
            />
            <div className="text">ID</div><TextField placeholder="ID" onChange={(e) => setId(e.target.value)} value={id}
              sx={{
                '& > :not(style)': { m: 0, width: '20ch', marginLeft: '65px' }
              }} />
            <div className="date" style={{ fontFamily: 'Kanit', fontSize: '15px', position: 'absolute', left: '330px', top: '550px' }}>วันที่เพิ่มอุปกรณ์ล่าสุด</div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                className="datePicker"
                
                value={time}
                onChange={(newValue) => {
                  setTime(newValue);
                }}
                renderInput={(params) => <TextField {...params} sx={{
                  '& > :not(style)': { width: '20ch', marginRight: '30px' ,marginTop:'0px' ,marginLeft:'55px'}
                }}  />}
              />
            </LocalizationProvider>
            <Button className="Add-Device"
              variant="contained"
              style={{ background: "#0C3483", marginLeft: "60px", marginRight: 'auto', marginTop: 20, border: 12 }}
              onClick={handleSubmit} 

            >ยืนยัน
            </Button>
            <Button className="Add-Device"
              variant="contained"
              style={{ background: "#DF0000", marginLeft: '120px', marginRight: 'auto', marginTop: 20, border: 12 }}
              onClick={handleClose}
              

            >ยกเลิก</Button>

          </Box>
        </Modal>
      </Stack>
    </div>
  );
}