//Database connection code goes here

const {Sequelize, DataTypes} =require("sequelize")
const bookModel = require("./models/book.model")
const User = require("./models/user.model")

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

db.books = bookModel(sequelize, DataTypes)
db.user = User(sequelize, DataTypes)

//Migration of database goes here
sequelize.sync({alter: false}).then(()=>{
    console.log("Migratin succssfylly!")
})

module.exports = db