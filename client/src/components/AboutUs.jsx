import React from 'react'
import jsonData  from "../templateData.json"
import { Card, Typography } from "@mui/material";

function AboutUs() {
  return (
    <>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            zIndex: 0,
          }}
        >
          <>
            {jsonData.map((aboutData) => {
              return <AboutData aboutData={aboutData} key={aboutData._id} />;
            })}
          </>
        </div>
    </>
  )
}
export function AboutData({ aboutData }) {
    const label = { inputProps: { "aria-label": "Color switch demo" } };
  
    return (
      <div style={{ padding: 0,margin:20 }}>
        <Card
          onClick={() => { }}
          style={{
            width: 250,
            padding: "0px 0px 10px 0px",
            margin: 10,
            minHeight: 220,
            maxHeight: 450,
            boxShadow: "0px 0px 5px grey",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent:"left"}}>
              <img
                src={"../../icons/"+ aboutData.iconLink}
                alt="icon Unavailable"
                style={{
                  width: 50,
                  height: 50,
                  padding:"10px",
                  background:"#80b918"
                }}
              />
            </div>
            <Typography
              style={{ padding:"10px",fontWeight:"bolder" }}
              textAlign={"left"}
              variant="h6"
            >
              {aboutData.title}
            </Typography>
            <Typography 
             style={{fontWeight:"bold" }}
             fontSize={"small"} padding={"0px 10px 0px 10px"} textAlign={"left"} variant="subtitle1">
              {aboutData.detail}
            </Typography>
          </div>
        </Card>
      </div>
    );
  }
  

export default AboutUs