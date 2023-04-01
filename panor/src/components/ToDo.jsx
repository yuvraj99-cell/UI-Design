import { Box } from "@mui/material";
import React from "react";
import Nav from "./Nav";

const ToDo = () => {
  return (
    <Box>
      <Nav name={"ToDo"} />
      <Box sx={{ display: "flex", height: "80vh" }}>
        <Box sx={{ color: "#efefef", margin: "auto" }}>
          <p style={{ fontSize: "4.5em", fontWeight: 1200 }}>Comming Soon</p>
        </Box>
      </Box>
    </Box>
  );
};

export default ToDo;
