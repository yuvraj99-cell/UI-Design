import React from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import ToDo from "./ToDo";
import Profile from "./Profile";
import Page from "./Page";
import Gallery from "./Gallery";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const SideTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // Main Box
    <Box style={{ display: "flex", flexDirection: "row" }}>
      {/* SideBar container open */}
      <Box>
        {" "}
        <Box
          style={{
            border: "0.5px solid gray",
            width: "15em",
            height: "85vh",
            marginTop: "4em",
            borderRadius: "1em",
            backgroundColor: "#4153c8",
            marginLeft: "5vw",
          }}
        >
          <Tabs
            style={{
              width: "15em",
              height: "50vh",
              backgroundColor: "transparent",
              color: "#f5f5f5",
              textDecoration: "none",
              textTransform: "none",
              marginTop: "10em",
            }}
            textColor=""
            indicatorColor=""
            orientation="vertical"
            TabIndicatorProps={{
              sx: {
                backgroundColor: "white",
                maxWidth: 20,
                width: "100%",
                maxHeight: 30,
                height: "100%",
                textTransform: "none",
                borderTopLeftRadius: "200px",
                borderBottomLeftRadius: "200px",
                marginTop: "7px",
                border: "2px solid white",
              },
            }}
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab
              style={{ textTransform: "none" }}
              label="Profile"
              {...a11yProps(0)}
            />
            <Divider
              style={{
                width: "60%",
                border: "1px solid #797cd7",
                margin: "auto",
              }}
            />
            <Tab
              style={{ textTransform: "none" }}
              label="Page"
              {...a11yProps(1)}
            />
            <Divider
              style={{
                width: "60%",
                border: "1px solid #797cd7",
                margin: "auto",
              }}
            />
            <Tab
              style={{ textTransform: "none" }}
              label="Gallery"
              {...a11yProps(2)}
            />
            <Divider
              style={{
                width: "60%",
                border: "1px solid #797cd7",
                margin: "auto",
              }}
            />
            <Tab
              style={{ textTransform: "none" }}
              label="ToDo"
              {...a11yProps(3)}
            />
            <Divider
              style={{
                width: "60%",
                border: "1px solid #797cd7",
                margin: "auto",
              }}
            />
          </Tabs>
        </Box>
      </Box>
      {/* SideBar container  close */}
      <Box style={{ width: "80%", marginLeft: "10px" }}>
        <TabPanel value={value} index={0}>
          <Profile />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Page />
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Gallery />
        </TabPanel>

        <TabPanel value={value} index={6}>
          <ToDo />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default SideTab;
