const express=require('express');
const {landingPage}=require('../controllers/landing')
const router=express.Router();
//get home page
router.get('/',landingPage);


module.exports=router;