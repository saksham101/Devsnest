const express = require("express");
const app = express();
const sequelize = require("./util/database");
const userroutes=require('./routes/user')
const isadmin=require('./middleware/isAdmin')
const adminroutes=require('./routes/user')
const isauth=require('./middleware/isAuth')

// const pg=require('pg-hstore')
// const pool=pg.createconnection({
//     host:"localhost",
//     user:"postgres"
// })

// pool.execute("SELECT * FROM user").then().catch()

require('dotenv').config()

app.use(express.json())

app.use('/admin',isauth,isadmin,adminroutes);

// app.use('/product',productroutes)
app.use('/user',userroutes);


app.use((error,req,res,next)=>{
    console.log(error.message);
})

sequelize
  .sync()
  .then(() => {
    console.log("Server connected");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
