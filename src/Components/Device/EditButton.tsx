import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import './css/DeviceButton.css';

export default function EditButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button
        className="edit-button"
        variant="outlined"
        sx={{
          border: 2,
          borderBlock: "solid",
          borderBlockColor: "rgba(53, 83, 164, 1)",
          borderRadius: "8px",
          color: "000",
          fontFamily: "Kanit",marginLeft:'auto',marginRight:'100px',marginTop:'50px' ,marginBottom:'auto'
        }}
      >
        แก้ไขอุปกรณ์
      </Button>
    </Stack>
  );
}
