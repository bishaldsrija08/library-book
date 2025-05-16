const { books } = require("../database/connection");

exports.fetchBook = async (req, res) => {
    //logic to  find all books  from database
    const data = await books.findAll() //returns array
    res.json({
        message: "Book fetced successfylly.",
        data
    })
}

exports.addBook = async (req, res) => {
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
}

exports.deleteBook = async (req, res) => {
    const id = req.params.id
    await books.destroy({where:{id}})
    res.json({
        message: "Book deleted successfylly."
    })
}

exports.editBook = async (req, res) => {
    const id = req.params.id
    const bookName = req.body.bookName
    const bookPrice =req.body.bookPrice
    const bookAuthor = req.body.bookAuthor
    const bookGenre = req.body.bookGenre

    try {
        await books.update(
            {
                bookName: bookName,
                bookPrice: bookPrice,
                bookAuthor: bookAuthor,
                bookGenre: bookGenre
            },
            {
                where: { id: id }
            }
        )

        res.json({
            message: "Book updated successfully."
        });
    } catch (error) {
        res.json({
            message: "Error updating book."
        })
    }
}

exports.singleFetch = async(req, res)=>{
    //Capture id what is sended
    const id = req.params.id
        const data = await books.findByPk(id) // object returns garxa
        if(!data){
           res.json({
                message: "Invalid request"
            })   
        }else{
            res.json({
                message: "Single book fetched",
                data
            })
        }
}