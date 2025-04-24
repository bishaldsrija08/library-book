// const app = require("express")()
const express = require("express")
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


const port = 3000
app.listen(port,()=>{
    console.log("Server started successfully at port " + port)
})