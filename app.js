// const app = require("express")()
const express = require("express")
const { addBook, fetchBook, singleFetch, editBook, deleteBook } = require("./controllers/bookController")
require("./database/connection")
const app = express()

app.use(express.json())

app.post("/books", addBook)

app.get("/books", fetchBook)

app.delete("/books/:id", deleteBook)

app.patch("/books/:id", editBook)

app.get("/books/:id", singleFetch)


// DATABASE_URL="postgresql://postgres.gtsglklxjsxsfcpezdgy:admin@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"


const port = 3000
app.listen(port, () => {
    console.log("Server started successfully at port " + port)
})