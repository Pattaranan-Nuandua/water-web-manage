import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
//import history from '../Component/history';
import "../css/Button.css";
import { useNavigate } from "react-router-dom";

export default function DeleteButton() {
  const navigate = useNavigate()

  return (
    <Stack  direction="row">
      <Button
          onClick={() => navigate('/delete')}
          className="delete-button"
          variant="contained"
          style={{
          backgroundColor: "#DF0000",
          borderRadius: "8px",
          color: "#fff",
          fontFamily: "Kanit",
          marginLeft: 'auto',marginTop: '-50px',marginRight: '100px'
        }}
      >
        ลบอุปกรณ์
      </Button>
    </Stack>
  );
}
