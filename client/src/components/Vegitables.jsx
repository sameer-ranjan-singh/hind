import { useEffect, useState } from "react";
import { Card, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { Base_URL } from "../config";
import axios from "axios";

function Vegitables({ vegitables, setVegitables, backendRequest }) {
  [vegitables, setVegitables] = useState([]);
  backendRequest = `${Base_URL}/user/`;
  const navigate = useNavigate();

  const init = async () => {
    const response = await axios.get(backendRequest, {});
    setVegitables(response.data.vegitables);
  };

  useEffect(() => {
    init();
  }, []);
  if (vegitables.length === 0) {
    console.log("vegitables length :"+ vegitables.length)
    return (
      <>
        <Stack
          sx={{
            width: "100%",
            color: "grey.100",
          }}
          spacing={1}
        >
          <LinearProgress />
        </Stack>
      </>
    );
  }
  return (
    <>
      <div
        data-theme="cupcake"
        style={{
          position: "relative",
          margin: 60,
        }}
      >

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            zIndex: 0,
          }}
        >
          <>
            {vegitables.map((vegitable) => {
              return <Vegitable vegitable={vegitable} key={vegitable._id} />;
            })}
          </>
        </div>
      </div>
    </>
  );
}

export function Vegitable({ vegitable }) {
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Color switch demo" } };

  return (
        <div style={{ padding: 0}} >
      <Card
        onClick={() => {
          // navigate(`${"/vegitable/" + vegitable._id}`);
        }}
        style={{
          width: 300,
          padding: "0px 0px 10px 0px",
          margin: 10,
          minHeight: 370,
          maxHeight: 450,
          boxShadow: "0px 0px 5px grey",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // borderRadius: 40,
          // border: "1px solid #93c422",
        }}
      >
        <div>
          <div style={{ display: "flex" }}>
            <img
              src={vegitable.imageLink}
              alt="vegitable Image Unavailable"
              style={{
                width: 300,
                height: 150,
                // boxShadow: "0px 5px 8px  black",
              }}
            />
          </div>
          <Typography
            style={{ padding:"10px",fontWeight:"bolder" }}
            textAlign={"left"}
            variant="h6"
          >
            {vegitable.name}
          </Typography>
          <Typography fontSize={"small"} padding={"0px 10px 0px 10px"} textAlign={"left"} variant="subtitle1">
            {vegitable.description}
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "left", margin: 10 }}>
          <button 
          style={{
            fontSize: "small",
            padding: "10px 20px 10px 20px",
            borderRadius:20,
            backgroundColor: "green",
            color:"white",
            background:"#80b918",
            fontWeight:"bold",
            textAlign: "center",
            border:"none",
          }}
          >
            ADD TO CART
          </button>
          
        </div>
      </Card>
    </div>
  );
}

export default Vegitables;
