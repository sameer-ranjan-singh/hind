import React from "react";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import IconButton from "@mui/material/IconButton";

function Footer() {
  return (
    <>
    <footer className="footer p-10 bg-base-200 text-base-content" style={{background:"black",color:"white"}}>
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    </>
  )
}

export default Footer;

/*
<div
      style={{
        // position: "fixed",
        // top: 50,
        // left: 0,
        // width: '40%',
        background: "none",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <IconButton
        style={{ color: "#93c422" }}
        onClick={(e) => {
          window.location = "https://www.linkedin.com/in/sameer-ranjan-singh/";
        }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        style={{ color: "#93c422" }}
        onClick={(e) => {
          window.location =
            "https://instagram.com/haan_wahe_sameer?igshid=YmMyMTA2M2Y=";
        }}
      >
        <InstagramIcon />
      </IconButton>
    </div>
*/
