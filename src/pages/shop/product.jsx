import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]
  //product description 
  return (
    <div className='rounded-2xl w-80 flex flex-col ml-10 '>
      <img src={productImage} className='w-96 -mb-8' />
      <div className='text-center'>
        <p className='font-semibold'>{productName}</p>
        <p>₹ {price}</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded-full mt-2'
          onClick={() => addToCart(id)}>
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  )
}
