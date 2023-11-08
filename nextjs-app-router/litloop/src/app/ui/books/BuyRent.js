'use client'

const BuyOrRent = ({book}) => {
  return(
    <div className="flex items-center">
      <div className="m-2">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Buy this book for {book.sellPrice} INR</button>
        <p className="text-sm text-gray-700 text-center">{book?.sold ? 
          `${book?.sold} copies sold already!` : 
          `Be the first one to buy this book!`}
        </p>
      </div>  
      <div className="m-2">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Rent this book for {book.rentPrice} INR/pm</button>
        <p className="text-sm text-gray-700 text-center">{book.isRented ? 
          `Rented by ${book?.renterIds?.length} customer already!` : 
          `Be the first one to rent this book!`}
        </p>
        </div>
    </div>
  )
}

export default BuyOrRent;