const express=require('express')
const router=express.Router()


const {getadmin}=require('../controllers/admin')

router.get('/',getadmin)