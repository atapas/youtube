import { getAllBooks } from "@/db/queries";
import BookList from "../ui/books/BookList";
const BookListPage =async () => {
  const books = await getAllBooks();

  console.log(books);
  return(
    <BookList books = {books} />
  )
}

export default BookListPage;