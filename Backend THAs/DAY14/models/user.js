const sequelize=require('../util/database')
const Sequelize=require('sequelize')


const User=sequelize.define("user",{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    allowNull:false,
    autoIncrement:true
  },
  name:{
    type:Sequelize.STRING,
    allowNull:false
  },
  role:{
    //user admin seller 
    type:Sequelize.STRING,
    allowNull:false
  },
  email:{
    type:Sequelize.STRING,
    allowNull:false
  }
})

module.exports=User;
// export default User;