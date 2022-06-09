import * as React from 'react';
//import Popover from '@mui/material/Popover';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
/*import ButtonFrom from '../button/buttonFrom';
import AddButton from '../button/AddButton';*/
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, Modal, Stack, TextField } from '@mui/material';
import './css/Device.css';
import './css/DeviceButton.css';
import axios from 'axios'

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


export default function DeletePopover() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    axios.delete('http://localhost:5000/device/delete', {  })
      .then((response) => console.log(response.data.message))
    handleClose()
  }

  /*const deleteDeviceId=() =>{
    let arrayids: any[] = [];
    state.Device.forEach[(d: { select: any; id: any; }) => {
      if (d.select) {
        arrayids.push(rows.id);
      }
    }];
    console.log(arrayids);
  }*/

  return (
    <div>
      
      <IconButton 
        onClick={handleOpen}
      >  
        <DeleteIcon />
      </IconButton>
   
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style}>
          <div className="box-Delete">
              <p>คุณแน่ใจว่าต้องการลบอุปกรณ์</p>
              <p>Are you sure you want to delete the device?</p>
              <Button className="Add-Device" 
                variant="contained"
                onClick={handleDelete}
                style={{ background :"#0C3483" , marginLeft: "auto" ,marginRight: 80 ,marginTop:20,border:12}}
                
                >ยืนยัน
              </Button>
              <Button className="Add-Device" 
                variant="contained"
                style={{ background :"#DF0000" ,marginLeft: 20 ,marginRight: "auto" ,marginTop:20,border:12 }}
                onClick={handleClose}
                
              >ยกเลิก</Button>
          </div>
        </Box>
      </Modal>
    
    </div>
  );
}