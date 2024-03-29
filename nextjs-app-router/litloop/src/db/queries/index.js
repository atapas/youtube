import { bookModel } from "@/models/book-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";
async function getAllBooks() {
  const allBooks = await bookModel.find().lean();
  return replaceMongoIdInArray(allBooks);
}

async function getBookById(id) {
  const book = await bookModel.findById(id).lean();
  return replaceMongoIdInObject(book);
}

export {
  getAllBooks,
  getBookById
}