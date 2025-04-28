//Database connection code goes here

const {Sequelize, DataTypes} =require("sequelize")

const sequelize = new Sequelize("postgresql://postgres.gtsglklxjsxsfcpezdgy:admin@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

sequelize.authenticate()
.then(()=>{
console.log("Authentication successful")
})
.catch((e)=>{
    console.log("Error", e)
})

const db ={}
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db