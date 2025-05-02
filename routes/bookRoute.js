const { fetchBook, addBook, singleFetch, editBook, deleteBook } = require("../controllers/bookController")

const router = require("express").Router()
router.route("/books").get(fetchBook).get(addBook)
router.route("/books/:id").get(singleFetch).patch(editBook).delete(deleteBook)

module.exports = router