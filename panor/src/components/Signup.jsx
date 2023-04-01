import { Avatar } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Signup = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const url = `https://panorbit.in/api/users.json`;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.users[id - 1], "hello");
      setUser(res.data.users[id - 1]);
    });
  }, [id]);
  return (
    <div>
      <Box sx={{ width: "12em", height: "3em", display: "flex" }}>
        <Box sx={{ margin: "auto 10px auto 0px" }}>
          <Avatar
            sx={{ height: 45, width: 45 }}
            name="Dan Abrahmov"
            src={user?.profilepicture}
          />
        </Box>
        <Box sx={{ margin: "auto auto auto 0.5em", fontWeight: "500" }}>
          {user.username}
        </Box>
      </Box>
    </div>
  );
};

export default Signup;
