import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from 'axios';
import "../css/Button.css";

export default function SearchButton() {
  
  return (
    <Stack  direction="row">
      <Button
        
        className="find-Button"
        variant="contained"
        style ={{ backgroundColor: "#3553A4", borderRadius: '8px', color: "#fff", fontFamily: 'Kanit' ,marginLeft: 350 ,marginRight:'auto' ,marginTop:'30px'}}
      >
        ค้นหา
      </Button>
    </Stack>
  );
}
