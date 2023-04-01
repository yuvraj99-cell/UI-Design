import { Avatar, Box, Divider,  } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from "./Map";
import Nav from "./Nav";

const Profile = () => {
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
    <Box>
      <Nav name={"Profile"} />
      <Box
        sx={{
          width: "100%",
          height: "82vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box sx={{ width: "35%", height: "82vh" }}>
          <Box sx={{ margin: "0.5em auto 0 auto", display: "flex" }}>
            <Avatar
              sx={{
                width: "40%",
                height: "40%",
                margin: "auto",
                display: "flex",
              }}
              alt="Travis Howard"
              src={user.profilepicture}
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "73%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Name Details container */}

            <Box>
              <h3
                style={{
                  padding: "5px",
                  margin: "auto",
                  textAlign: "center",
                  color: "gray",
                  fontWeight: "400",
                }}
              >
                {user?.username}
              </h3>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "35%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  width: "98%",
                  height: "100%",
                  marginRight: "2px",
                  color: "gray",
                  fontWeight: "500",
                }}
              >
                <h4
                  style={{
                    textAlign: "right",
                    marginTop: "3px",
                    fontWeight: "100",
                  }}
                >
                  Username:
                </h4>
                <h4
                  style={{
                    textAlign: "right",
                    marginTop: "-8px",
                    fontWeight: "500",
                  }}
                >
                  e-mail:
                </h4>
                <h4
                  style={{
                    textAlign: "right",
                    marginTop: "-8px",
                    fontWeight: "500",
                  }}
                >
                  Phone:
                </h4>
                <h4
                  style={{
                    textAlign: "right",
                    marginTop: "-8px",
                    fontWeight: "500",
                  }}
                >
                  website:
                </h4>
              </Box>
              <Box sx={{ width: "98%", height: "100%" }}>
                <h4
                  style={{
                    textAlign: "left",
                    marginTop: "3px",
                    fontWeight: "500",
                  }}
                >
                  {user?.name}
                </h4>
                <h4
                  style={{
                    textAlign: "left",
                    marginTop: "-8px",
                    fontWeight: "500",
                  }}
                >
                  {user?.email}
                </h4>
                <h4
                  style={{
                    textAlign: "left",
                    marginTop: "-8px",
                    fontWeight: "500",
                  }}
                >
                  {user?.phone?.match(/\d+/g)}
                </h4>
                <h4
                  style={{
                    textAlign: "left",
                    marginTop: "-8px",
                    fontWeight: "500",
                  }}
                >
                  {user?.website}
                </h4>
              </Box>
            </Box>

            {/* Name Details container End */}

            <Divider sx={{ margin: "0.8em auto 5px auto ", width: "70%" }} />

            {/* Company Details Container  start*/}

            <Box>
              <h3
                style={{
                  padding: "5px",
                  margin: "auto",
                  textAlign: "center",
                  color: "gray",
                  fontWeight: "400",
                }}
              >
                Company
              </h3>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "35%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  width: "98%",
                  height: "100%",
                  marginRight: "2px",
                  color: "gray",
                }}
              >
                <h4
                  style={{
                    textAlign: "right",
                    marginTop: "3px",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  Name :
                </h4>
                <br />
                <h4
                  style={{
                    textAlign: "right",
                    marginTop: "-1.9em",
                    fontWeight: "500",
                  }}
                >
                  catchpharse:
                </h4>
                <h4
                  style={{
                    textAlign: "right",
                    marginTop: "2.2em",
                    fontWeight: "500",
                  }}
                >
                  bs :
                </h4>
              </Box>
              <Box sx={{ width: "98%", height: "100%" }}>
                <h4
                  style={{
                    textAlign: "left",
                    marginTop: "3px",
                    fontWeight: "500",
                  }}
                >
                  {user.company?.name}
                </h4>
                <h4
                  style={{
                    textAlign: "left",
                    marginTop: "-8px",
                    fontWeight: "500",
                  }}
                >
                  {user.company?.catchPhrase}
                </h4>
                <h4
                  style={{
                    textAlign: "left",
                    marginTop: "-8px",
                    fontWeight: "500",
                  }}
                >
                  {user.company?.bs}
                </h4>
              </Box>
            </Box>

            {/* Company Details Container End */}
          </Box>
        </Box>

        {/* Vertical Divider */}

        <Divider
          orientation="vertical"
          sx={{ height: "80%", margin: "auto", marginLeft: "20px" }}
        />
        <Box sx={{ width: "65%", height: "82vh" }}>
          {/* Address start */}

          <Box>
            <h3
              style={{
                padding: "5px",
                marginLeft: "1em",
                textAlign: "left",
                fontWeight: "400",
                color: "gray",
              }}
            >
              Address :
            </h3>
          </Box>
          <Box
            sx={{
              width: "60%",
              height: "30%",
              display: "flex",
              flexDirection: "row",
              marginLeft: "2em",
            }}
          >
            <Box
              sx={{
                width: "50%",
                height: "100%",
                marginRight: "2px",
                color: "gray",
              }}
            >
              <h4
                style={{
                  textAlign: "right",
                  marginTop: "3px",
                  fontWeight: "500",
                }}
              >
                Street :
              </h4>
              <h4
                style={{
                  textAlign: "right",
                  marginTop: "-8px",
                  fontWeight: "500",
                }}
              >
                Suite:
              </h4>
              <h4
                style={{
                  textAlign: "right",
                  marginTop: "-8px",
                  fontWeight: "500",
                }}
              >
                City :
              </h4>
              <h4
                style={{
                  textAlign: "right",
                  marginTop: "-8px",
                  fontWeight: "500",
                }}
              >
                Zipcode:
              </h4>
            </Box>
            <Box sx={{ width: "100%", height: "100%" }}>
              <h4
                style={{
                  textAlign: "left",
                  marginTop: "3px",
                  fontWeight: "500",
                }}
              >
                {user.address?.street}
              </h4>
              <h4
                style={{
                  textAlign: "left",
                  marginTop: "-8px",
                  fontWeight: "500",
                }}
              >
                {user.address?.suite}
              </h4>
              <h4
                style={{
                  textAlign: "left",
                  marginTop: "-8px",
                  fontWeight: "500",
                }}
              >
                {user.address?.city}
              </h4>
              <h4
                style={{
                  textAlign: "left",
                  marginTop: "-8px",
                  fontWeight: "500",
                }}
              >
                {user.address?.zipcode}
              </h4>
            </Box>
          </Box>

          {/* Address ends */}

          {/* Map starts */}
          {/* Map Container */}
          <Box
            sx={{
              border: "1px solid gray",
              height: "35vh",
              width: "80%",
              margin: "-30px 10px 0 50px",
              borderRadius: "15px",
            }}
          >
            <Map />
          </Box>
          {/* Map Container end */}

          {/* Logitude Latitude Container */}
          <Box
            sx={{
              display: "flex",
              width: "42%",
              justifyContent: "space-between",
              marginLeft: "19em",
            }}
          >
            <Box> Lat : {user.address?.geo.lat}</Box>
            <Box>Long : {user.address?.geo.lng}</Box>
          </Box>

          {/* Map Ends*/}
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
