const express=require('express');
const router=express.Router();
const User=require('../models/User');
const { body, validationResult } = require("express-validator")
const bcrypt=require('bcryptjs')
var jwt=require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET='AbhinavJain';

    //Route 1: Creating a user
router.post('/',[
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 }),
  ], async (req, res) => {
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    
    try {
        const salt=await bcrypt.genSalt(10);
        const secPass=await bcrypt.hash(req.body.password,salt)
      const user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email
      });

      const data={
        user:{
            id:user.id
        }
      }
      const authToken=jwt.sign(data,JWT_SECRET);

      //res.json(user);
      success=true;
      res.json({success,authToken})

    } catch (error) {
      if (error.code === 11000) {
        // Duplicate key error
        return res.status(400).json({ error: 'Email already exists' });
      }
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  })
  
  //Route 2: Authenticating a user
  router.post('/login',[
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Password cannot be blank").exists(),

  ], async (req, res) => {
    let success=false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email,password}=req.body;
    try{
        let user=await User.findOne({email});
        if(!user){
          
            return res.status(400).json({error:"Please try to login with correct credentials"});
        }
        const passwordCompare=await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            success=false
            return res.status(400).json({success,error:"Please try to login with correct credentials"});
        }

        const data={
            user:{
                id:user.id
            }
        }
        const authToken=jwt.sign(data,JWT_SECRET);
        success=true;
        res.json({success,authToken})
    }
    catch(error){
        if (error.code === 11000) {
            // Duplicate key error
            return res.status(400).json({ error: 'Email already exists' });
          }
          console.error(error);
          res.status(500).json({ error: 'Server error' });
        }
    })

    // Route 3: Get logged in user detail
    router.post('/getuser',fetchuser,async (req, res) => {
    try{
        const userId=req.user;
        const user=await User.findById(userId.id).select("-password")
        res.send({user});
    } catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})
module.exports=router