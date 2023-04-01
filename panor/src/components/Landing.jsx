import { Avatar, Divider, List, ListItem, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Box } from "@mui/system";
const Landing = ({ children }) => {
  const [profileData, setProfileData] = useState([]);
  const url = "https://panorbit.in/api/users.json";

  const getData = () => {
    axios.get(url).then((res) => setProfileData(res.data.users));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(profileData, "ALLDADADADADA");

  return (
    <div >
   
    <Box
      sx={{
        border: "1px solid gray",
        display: "flex",
        width: "34.5%",
        margin: "10em auto 0 30.4em",
       flexDirection:"column",
       borderRadius:"15px"
      }}
    >
     <Box sx={{backgroundColor:"#f9f9f9", height:"3.5em",borderTopLeftRadius:"15px",borderTopRightRadius:"15px"}}>
      <h3 style={{margin:"15px auto 0 auto", textAlign:"center" , fontWeight:"500" }}>select an account</h3>
     </Box>
      <Box>
       <Scrollbars style={{ width: 500, height: 400 }}>
      <List>
        {profileData &&
          profileData.map((elem, index) => (
            <Link style={{ textDecoration: 'none' }} to={`/profile/${elem.id}`}>
              <ListItem key={index} sx={{textTransform:"none"}}>
                <Avatar name="Dan Abrahmov" src={elem?.profilepicture} />

               <p style={{textDecoration:"none" , color:"black", marginLeft:"20px"}}>
                  {elem?.name}
                  </p>
               
              </ListItem>
              <Divider sx={{marginLeft:"5px", width:"90%"}}/>
            </Link>
          ))}
      </List>
      </Scrollbars>
      </Box>
    </Box>
    </div>
  );
};

export default Landing;
