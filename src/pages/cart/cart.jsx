import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import { useNavigate } from 'react-router';
export const Cart = () => {

  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()
  const navi = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center'>
      {totalAmount > 0  && 
      (<div>
        <h1 className='font-bold text-3xl m-4'>Your Cart Items</h1>
      </div>)}

      <div className='flex flex-col items-center justify-center'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>

      {totalAmount > 0 ?
        <div>
          <p className='mt-3 mb-4 ml-[60px] text-xl'><b>Subtotal :</b> <span className='text-green-600 font-semibold '>&#8377; {getTotalCartAmount()}</span></p>
          <button onClick={() => navi("/")} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5 ml-2">
            Continue Shopping
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button>
        </div>
        :
        <h1 className='text-red-600 font-extrabold mt-4 text-2xl'>Your Cart is Empty !!!</h1>
      }
    </div>
  )
}
