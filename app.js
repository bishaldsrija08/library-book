// const app = require("express")()
const express = require("express")
const { books } = require("./database/connection")
require("./database/connection")
const app = express()

app.use(express.json())

app.post("/books", async (req, res) => {
    const { bookName, bookPrice, bookAuthor, bookGenre } = req.body
    if (bookName && bookPrice && bookAuthor && bookGenre) {
        await books.create({
            bookName,
            bookPrice,
            bookAuthor,
            bookGenre
        })
        res.json({
            status: 200,
            message: "Book Post successfylly."
        })
    } else {

        res.json({
            message: "Pleae provide all information"
        })
    }
})

app.get("/books", async (req, res) => {
    //logic to  find all books  from database
    const data = await books.findAll() //returns array
    res.json({
        message: "Book fetced successfylly.",
        data
    })
})

app.delete("/books/:id", (req, res) => {
    res.json({
        message: "Book deleted successfylly."
    })
})

app.patch("/books/:id", (req, res) => {
    res.json({
        message: "Book updated successfylly."
    })
})


// DATABASE_URL="postgresql://postgres.gtsglklxjsxsfcpezdgy:admin@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"


const port = 3000
app.listen(port, () => {
    console.log("Server started successfully at port " + port)
})