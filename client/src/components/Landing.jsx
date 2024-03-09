import React from 'react'

function Landing() {
  return (
    <div style={{position:"relative",display: "flex",justifyContent: "center",height:"90%"}}>
      <img 
       style={{
        width: "90%",
        // height:"100%",
        display: "flex",
        justifyContent: "center",
        zIndex:0,
      }} 
      src="../../LPage1.jpg" alt="Img Failed to Load" 
      />
      <h1 style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        textAlign: 'center',
        width: '100%',
        fontWeight:"bolder",
        fontSize:"larger",
        }}>100% Organic</h1>
    </div>
  )
}

export default Landing