const Sequelize=require('sequelize')

const sequelize=new Sequelize("session","postgres","123Amogh@",{
    host:"localhost",
    dialect:"postgres"
})


module.exports=sequelize