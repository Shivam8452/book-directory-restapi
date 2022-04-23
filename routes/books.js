const express = require('express');
const router = express.Router();
const books = require('../books/books.json');

// fetch all books
router.get('/getallbooks', (req, res) => {
  res.json(books);
});

// get book by id
router.get('/getone/:id', (req, res) => {
  const { id } = req.params;
  res.json(books.filter((ele) => ele.id === parseInt(id)));
});

// add a book
router.post('/addbook', (req, res) => {
  const body = req.body;
  books.push(body);
  res.json({ success:true,
              message:"Book added successfully",
              data:books});
});


// update a book
router.put('/updatebook/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  books.forEach((book, index) => {
    if (book.id === parseInt(id)) {
      books[index] = body;
    }
  });
  res.json({ success:true,
    message:"Book updated successfully",
    data:books});
});


// delete a book
router.delete('/deletebook/:id', (req, res) => {
  const { id } = req.params;
  books.forEach((book, index) => {
    if (book.id === parseInt(id)) {
      books.splice(index);
    }
  });
  res.json({ success:true,
    message:"Book deleted successfully",
    data:books});
});

module.exports = router;