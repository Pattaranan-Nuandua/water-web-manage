import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './button-from.css';


function BtnGroup() {
  return (
    <div >
      <Stack direction="row" spacing={2} >
        <Button className="add-group"
                variant="contained"
                
                style={{ background :"#0C3483" , marginLeft: "auto" ,marginRight: 380 }}
                
                onClick={() => {
                  alert('เพิ่มผู้กลุ่มใช้สำเร็จ');
                }}
                
                >ยืนยัน
                </Button>
        <Button className="cancle-group"
                variant="contained"
                style={{ background :"#DF0000" ,marginLeft: 20 ,marginRight: "auto"  }}
                onClick={() => {
                  alert('ยกเลิก');
                }}
                
                >ยกเลิก</Button>
      </Stack>
    </div>
  );
}
export default BtnGroup;
