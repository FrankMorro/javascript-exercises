const getTheTitles = function (books) {
  titleBook = []

  for (let i = 0; i < books.length; i++) {
    titleBook.push(books[i].title)
  }

  return titleBook
}

// Do not edit below this line
module.exports = getTheTitles
