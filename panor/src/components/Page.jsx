import { Box } from "@mui/material";
import React from "react";
import Nav from "./Nav";

const Page = () => {
  return (
    <Box>
      <Nav name={"Page"} />
      <Box sx={{ display: "flex", height: "80vh" }}>
        <Box sx={{ color: "#efefef", margin: "auto" }}>
          <p style={{ fontSize: "4.5em", fontWeight: 1200 }}>Comming Soon</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
