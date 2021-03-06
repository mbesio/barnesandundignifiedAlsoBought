const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/relatedbooks',
  {useUnifiedTopology: true, useNewUrlParser: true},
  () => {console.log('Connected to database!')}
);

let bookSchema = mongoose.Schema({
  relatedIsbn: Number,
  isbn: Number,
  title: String,
  author: String,
  rating: Number
})

let Book = mongoose.model('Book', bookSchema);

let getData = (isbn, callback) => {
  Book.find({relatedIsbn: isbn.params.relatedIsbn}, (err, data) => {
// let getData = (callback) => {
//   Book.find((err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  }).limit(10)
}

module.exports = Book;
module.exports.getData = getData;