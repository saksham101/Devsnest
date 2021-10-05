const express=require('express')

const router=express.Router()
const {login}=require('../controllers/user')
// model - 
// controller - model+view 
// view -   


router.post('/login',login)


module.exports=router