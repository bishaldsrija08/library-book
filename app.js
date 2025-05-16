// const app = require("express")()
const express = require("express")
const { addBook, fetchBook, singleFetch, editBook, deleteBook } = require("./controllers/bookController")
require("./database/connection")
const cors = require("cors")
const app = express()
const bookRoute =  require("./routes/bookRoute")

app.use(cors({
    origin: "http://localhost:5173"
}))
// DATABASE_URL="postgresql://postgres.gtsglklxjsxsfcpezdgy:admin@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"

app.use("/api",bookRoute)

const port = 3000
app.listen(port, () => {
    console.log("Server started successfully at port " + port)
})