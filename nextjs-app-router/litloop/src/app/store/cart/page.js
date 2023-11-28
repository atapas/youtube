import CartItems from "@/app/ui/cart/CartItems";
import Payment from "@/app/ui/cart/Payment";
import OrderDetails from "@/app/ui/cart/OrderDetails";


const CartPage = () => {
  return(
    <div className="p-2 flex flex-col w-full">
      <h2 className="text-3xl">Welcome Mr. X</h2>
      <p className="text-xl text-zinc-600 pt-2">
        Thanks a lot for your purchase. Please complete the checkout process by paying for your order.
      </p>


      <div className="flex flex-wrap xs:flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center pt-10">
        <CartItems />
        <OrderDetails />
        <Payment />
      </div>
    </div>
  )
}


export default CartPage;