const express = require('express');
const { Vegitable } = require("../db/index.js")
const router = express.Router()

// Checking for backend working 
router.get("/check", async (req,res) => {
  res.status(200).send({
    message :"Hello from Render.com / sameer",
  })
})

// GET ALL Vegitables
router.get('/', async (req, res) => {
  const vegitables = await Vegitable.find({inStock: true});
  res.json({vegitables});
});  

// GET SINGLE COURSE DETAILS   
  // router.get("/course/:courseId", async (req,res)=>{
  //   const courseId = req.params.courseId ;
  //   const course = await Course.findById(courseId)
  //   const user = await User.findOne({ username: req.user.username })
  //   const alreadyPurchased = user.purchasedCourses.filter( (ObjectId) =>{
  //     if(ObjectId == courseId){
  //       return courseId
  //     }
  //   })
  //   console.log(alreadyPurchased)
  //   res.json({course,alreadyPurchased})
  // })

  module.exports = router
