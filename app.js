// const app = require("express")()
const express = require("express")
require("./database/connection")
const app = express()

app.get("/books", (req, res)=>{
    res.json({
        message: "Book fetced successfylly."
    })
})

app.post("/books", (req, res)=>{
    res.json({
        message: "Book created successfylly."
    })
})

app.delete("/books/:id", (req, res)=>{
    res.json({
        message: "Book deleted successfylly."
    })
})

app.patch("/books/:id", (req, res)=>{
    res.json({
        message: "Book updated successfylly."
    })
})


// DATABASE_URL="postgresql://postgres.gtsglklxjsxsfcpezdgy:admin@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"


const port = 3000
app.listen(port,()=>{
    console.log("Server started successfully at port " + port)
})